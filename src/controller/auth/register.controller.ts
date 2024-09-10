import { GET_CONNECTION, QUERY } from "../../database/util";
import DATABASE_INSTANCE from "../../database";
import { Request, Response } from "express";
import { PoolConnection } from "mysql";
import { HASH_PASSWORD } from "../../utils/handle-hashing";

const SQL_QUERY = "INSERT INTO AUTH (EMAIL,PASSWORD) VALUES (?,?);"

const REGISTER = async (req: Request, res: Response) => {

    // handling pool connection

    let connection: PoolConnection | undefined;

    try {
        connection = await GET_CONNECTION(DATABASE_INSTANCE);
        let body = req.body;
        // creating new admin 
        let email = body.email;
        let password = body.password;

        if (!email || !password) {
            return res.status(400).json({ code: "ERR_MISSING_FIELD", msg: "email and password are required" });
        }

        const hash_password = await HASH_PASSWORD(password);
        
        await QUERY(connection, SQL_QUERY, [email, hash_password]);

        return res.status(201).json({ msg: "New admin registered" });


    } catch (err: any) {

        if (err.message === "ERR_DUPLICATE_VALUE") {
            return res.status(400).json({ code: err.message, msg: "User already exist" });
        }
        else {
            return res.status(500).json({ msg: "Server side error", code: err.message });
        }

    }
    finally {
        if (connection) connection.release();
    }


}

export default REGISTER;
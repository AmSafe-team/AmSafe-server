import { GET_CONNECTION, QUERY } from "../../database/util";
import DATABASE_INSTANCE from "../../database";
import { Request, Response } from "express";
import { PoolConnection } from "mysql";
import { COMPARE_PASSWORD } from "../../utils/handle-hashing";


const SQL_QUERY = "SELECT * FROM AUTH WHERE EMAIL = ?;"

const LOGIN = async (req: Request, res: Response) => {

    let connection: PoolConnection | undefined;

    try {
        connection = await GET_CONNECTION(DATABASE_INSTANCE);
        let body = req.body;

        let email = body.email;
        let password = body.password;


        if (!email || !password) {
            return res.status(400).json({ code: "ERR_MISSING_FIELD", msg: "email and password are required" });
        }

        const user = await QUERY(connection, SQL_QUERY, [email]);
        if (!user || user.length === 0) {
            return res.status(400).json({ msg: "User not found", code: "ERR_USER_NOT_FOUND" })
        }

        const database_password = user[0].PASSWORD;

        const result = await COMPARE_PASSWORD(database_password, password);

        if (result) {
            return res.status(200).json({ msg: "Login successful" })
        }

        else {
            return res.status(401).json({ msg: "Incorrect credentials", code: "ERR_INCORRECT_CREDENTIALS" })
        }

    } catch (err: any) {
        return res.status(500).json({ msg: "Server side error", code: err.message });

    }
    finally {
        if (connection) connection.release();
    }


}

export default LOGIN;

import { GET_CONNECTION, QUERY } from "../../database/util";
import DATABASE_INSTANCE from "../../database";
import { Request, Response } from "express";
import { PoolConnection } from "mysql";


const USER_QUERY = "SELECT * FROM USER_PROFILE WHERE EMAIL=?";
const CONTACT_DETAILS_QUERY = "SELECT CONTACT_NAME,CONTACT_PHONE, CONTACT_EMAIL FROM CONTACT_LIST WHERE HOST_EMAIL=?;";

const GET_USER = async (req: Request, res: Response) => {
    const url_query = req.query;
    let connection: PoolConnection | undefined;
    const email = url_query.email;
    if (!email) {
        return res.status(400).send({ msg: "email missing" });
    }
    try {
        connection = await GET_CONNECTION(DATABASE_INSTANCE);
        const db_res = await QUERY(connection, USER_QUERY, [email]);

        if (!db_res || db_res.length === 0) {
            return res.status(400).send({ msg: "User account not found" });
        }
        const user = db_res[0]
        const contact = await QUERY(connection, CONTACT_DETAILS_QUERY, [email])
        return res.status(200).send({ msg: "User profile", data: { ...user, CONTACT_LIST: contact } })
    }
    catch (err) {
        console.log(err)
        if (!connection) {
            return res.status(500).send({ msg: "database connection error" });
        }
        else {
            return res.status(500).send({ msg: "server side error" });
        }

    }
    finally {
        if (connection) {
            connection.release();
        }
    }



}

export default GET_USER;
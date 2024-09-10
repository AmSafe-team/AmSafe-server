import { GET_CONNECTION, QUERY } from "../../database/util";
import DATABASE_INSTANCE from "../../database";
import { Request, Response } from "express";
import { PoolConnection } from "mysql";

const CONTACT_DETAILS_QUERY = "SELECT CONTACT_NAME,CONTACT_PHONE, CONTACT_EMAIL FROM CONTACT_LIST WHERE HOST_EMAIL=?;";

const GET_CONTACTS = async (req: Request, res: Response) => {
    const url_query = req.query;
    let connection: PoolConnection | undefined;
    const email = url_query.email;

    if (!email) {
        return res.status(400).send({ msg: "Email missing" });
    }

    try {
        connection = await GET_CONNECTION(DATABASE_INSTANCE);
        const contacts = await QUERY(connection, CONTACT_DETAILS_QUERY, [email]);
        return res.status(200).send({ data: contacts, msg: "User contacts" })
    }
    catch (err) {

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

export default GET_CONTACTS;
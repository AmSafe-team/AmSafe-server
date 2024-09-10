import { GET_CONNECTION, QUERY } from "../../database/util";
import DATABASE_INSTANCE from "../../database";
import { Request, Response } from "express";
import { PoolConnection } from "mysql";


const CONTACT_ADD_QUERY = "DELETE FROM CONTACTS WHERE HOST_EMAIL=? AND CONTACT_EMAIL=?;";


const REMOVE_CONTACT = async (req: Request, res: Response) => {
    const url_query = req.query;
    let connection: PoolConnection | undefined;
    const host_email = url_query.host_email;
    const contact_email = url_query.contact_email;



    if (!host_email || !contact_email) {
        return res.status(400).send({ msg: "Fields missing" });
    }

    try {
        connection = await GET_CONNECTION(DATABASE_INSTANCE);
        await QUERY(connection, CONTACT_ADD_QUERY, [host_email, contact_email]);
        return res.status(410).send({ msg: "contact removed" })
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

export default REMOVE_CONTACT;
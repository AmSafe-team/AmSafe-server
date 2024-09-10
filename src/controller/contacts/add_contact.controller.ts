import { GET_CONNECTION, QUERY } from "../../database/util";
import DATABASE_INSTANCE from "../../database";
import { Request, Response } from "express";
import { PoolConnection } from "mysql";


const CONTACT_ADD_QUERY = "INSERT INTO CONTACTS  (HOST_EMAIL,CONTACT_EMAIL) VALUES (?,?);";


const ADD_CONTACT = async (req: Request, res: Response) => {
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
        return res.status(201).send({ msg: "contact added" })
    }
    catch (err) {
        console.log(err)
        if (!connection) {
            return res.status(500).send({ msg: "database connection error" });
        }
        // @ts-ignore
        else if (err.message === 'ERR_DUPLICATE_VALUE') {
            return res.status(500).send({ msg: "contact exist" });
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

export default ADD_CONTACT;
import { GET_CONNECTION, QUERY } from "../../database/util";
import DATABASE_INSTANCE from "../../database";
import { Request, Response } from "express";
import { PoolConnection } from "mysql";

const USER_SEARCH_QUERY = "SELECT NAME, EMAIL, PHONE FROM USER WHERE UPPER(SUBSTR(NAME, 1, LENGTH(?))) = UPPER(?);";

const SEARCH_CONTACTS = async (req: Request, res: Response) => {
    const url_query = req.query;
    let connection: PoolConnection | undefined;
    const name = url_query.name;

    if (!name) {
        return res.status(400).send({ msg: "Name missing" });
    }

    try {
        connection = await GET_CONNECTION(DATABASE_INSTANCE);
        const users = await QUERY(connection, USER_SEARCH_QUERY, [name, name]);
        return res.status(200).send({ data: users, msg: "Users found" })
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

export default SEARCH_CONTACTS;
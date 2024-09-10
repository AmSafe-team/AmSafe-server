import REDIS_CLIENT from "../../redis";
import { v4 as uuidv4 } from 'uuid';
import DATABASE_INSTANCE from "../../database";
import { GET_CONNECTION, QUERY } from "../../database/util";
import { Request, Response } from "express";
import { PoolConnection } from "mysql";

const CHAT_QUERY = "SELECT * FROM CHATS WHERE CHATROOM=?";

const GET_CHATROOM = async (req: Request, res: Response) => {
    const url_query = req.query;
    let connection: PoolConnection | undefined;
    const host_email = url_query.host_email as string;
    const contact_email = url_query.contact_email as string;

    if (!host_email || !contact_email) {
        return res.status(400).send({ msg: "Fields missing" });
    }

    try {
        let chatroom = await REDIS_CLIENT.get(`${host_email}#$#${contact_email}`);
        if (!chatroom) {
            chatroom = await REDIS_CLIENT.get(`${contact_email}#$#${host_email}`);
        }

        if (!chatroom) {
            const new_id = uuidv4();
            await REDIS_CLIENT.set(`${host_email}#$#${contact_email}`, new_id);
            return res.status(201).send({ msg: "New chatroom created", chatroom_id: new_id, chats: [] });
        }

        connection = await GET_CONNECTION(DATABASE_INSTANCE);
        const chats = await QUERY(connection, CHAT_QUERY, [chatroom]);
        return res.status(200).send({ msg: "Chatroom exists", chatroom_id: chatroom, chats });
    } catch (err: any) {
        console.error(err);
        if (!connection) {
            return res.status(500).send({ msg: "Database connection error" });
        }
        // Improved error checking
        if (err.message && err.message.includes('ERR_DUPLICATE_VALUE')) {
            return res.status(409).send({ msg: "Contact exists" });
        }
        return res.status(500).send({ msg: "Server side error" });
    } finally {
        if (connection) {
            connection.release();
        }
    }
};

export default GET_CHATROOM;

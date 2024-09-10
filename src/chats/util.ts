import { PoolConnection } from "mysql";
import DATABASE_INSTANCE from "../database";
import { GET_CONNECTION, QUERY } from "../database/util"
import { RawData } from "ws";

const SAVE_MSG_QUERY = "INSERT INTO CHATS (CHAT,USER_EMAIL,CHATROOM) VALUES (?,?,?);";
export const save_msg = async (chatroom: string, chat: RawData, user: string) => {
    let connection: PoolConnection | undefined;
    try {
        connection = await GET_CONNECTION(DATABASE_INSTANCE);
        await QUERY(connection, SAVE_MSG_QUERY, [chat, user, chatroom]);
        return;
    }
    catch (err) {
        throw new Error("ERR_SENDING_MESSAGE");
    }
    finally {
        if (connection) {
            connection.release();
        }

    }
}
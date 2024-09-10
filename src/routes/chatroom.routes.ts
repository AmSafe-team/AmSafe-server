import { Router } from "express";
import GET_CHATROOM from "../controller/chatroom/get_chatroom.controller";

const chatroom_router = Router();


chatroom_router.get("/", GET_CHATROOM);


export default chatroom_router;
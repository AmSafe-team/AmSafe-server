import { Router, Response, Request } from "express";

import GET_USER from "../controller/user/get-user.controller";
import CREATE_USER from "../controller/user/create-user.controller";

const user_router = Router();


user_router.get('/test', (req: Request, res: Response) => {
    return res.send("Hello From user route")
});
user_router.get('/', GET_USER);
user_router.post('/', CREATE_USER);


export default user_router;
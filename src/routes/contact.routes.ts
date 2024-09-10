import { Router, Response, Request } from "express";

import GET_CONTACTS from "../controller/contacts/get_contacts.controller";
import ADD_CONTACT from "../controller/contacts/add_contact.controller";
import REMOVE_CONTACT from "../controller/contacts/remove_contact.controller";
import SEARCH_CONTACTS from "../controller/contacts/search_contact.controller";
const contact_router = Router();


contact_router.get('/test', (req: Request, res: Response) => {
    return res.send("Hello From contact route")
});


contact_router.get('/', GET_CONTACTS);
contact_router.get('/search', SEARCH_CONTACTS);
contact_router.put("/", ADD_CONTACT);
contact_router.delete("/", REMOVE_CONTACT);



export default contact_router;
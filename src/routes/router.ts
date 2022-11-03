import { Router } from "express";
import { authenticateUserController } from "../controller/authenticateUserController";
import { createMessageController } from "../controller/createMessageController";
import { Get3LastMessagesController } from "../controller/getLast3MessagesController";
import { profileUserController } from "../controller/profileUserController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const router = Router();

router.post('/authenticate', new authenticateUserController().handle);

router.post(
    '/messages', 
    ensureAuthenticated, 
    new createMessageController().handle
);

router.get('/messages/last3', new Get3LastMessagesController().handle);

router.get(
    '/profile', 
    ensureAuthenticated, 
    new profileUserController().handle
);


export { router }
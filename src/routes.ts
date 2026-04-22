import {Router} from "express";
import {UserController} from "./controllers/UserController";
import { LoginController } from "./controllers/LoginController";
import { verifyAuth } from "./middleware/verifyAuth";

export const router = Router();
const userController = new UserController();
const loginController = new LoginController();

router.post("/user", userController.createUser); // Nao precisa de parametro aqui, ele entende por default
router.get("/user/:userId", verifyAuth,userController.getUser); // para "decorar" como se fosse
router.delete('/user', userController.deleteUser);

router.post("/login", loginController.login)
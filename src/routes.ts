import {Router} from "express";
import {UserController} from "./controllers/UserController";
import { LoginController } from "./controllers/LoginController";

export const router = Router();
const userController = new UserController();
const loginController = new LoginController();

router.post("/user", userController.createUser); // Nao precisa de parametro aqui, ele entende por default
router.get("/user", userController.getUser);
router.delete('/user', userController.deleteUser);

router.post("/login", loginController.login)
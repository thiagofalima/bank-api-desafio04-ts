import {Router} from "express";
import {UserController} from "./controllers/UserController";

export const router = Router();
const userController = new UserController();

router.post("/user", userController.createUser); // Nao precisa de parametro aqui, ele entende por default
router.get("/user", userController.getAllUsers);
router.delete('/user', userController.deleteUser);


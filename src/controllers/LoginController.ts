import { Request, Response } from "express"
import { sign } from "jsonwebtoken"

const user = {
    user_id: "12345",
    name: "Thiago",
    email: "thiago@senai.com",
    password: "12345"
}

export class LoginController{
    login =  async (request: Request, response: Response) => {
        return response.status(200).json(user)
    }
}
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { UserService } from "../services/UserService";

const user = {
  user_id: "12345",
  name: "Thiago",
  email: "thiago@senai.com",
  password: "12345",
};

export class LoginController {
  userServie: UserService

  constructor(
    userService = new UserService()
  ){
    this.userServie = userService
  }

  login = async (request: Request, response: Response) => {
    const {email, password} = request.body
    
    try{
      const token = await this.userServie.getToken(email, password);
  
      return response.status(200).json({ token });
    } catch (error) {
      return response.status(500).json({ message: "Email/password invalid!" });
    }
  };
}

import { Request, Response } from "express";
import { sign } from "jsonwebtoken";

const user = {
  user_id: "12345",
  name: "Thiago",
  email: "thiago@senai.com",
  password: "12345",
};

export class LoginController {
  login = async (request: Request, response: Response) => {
    const tokenData = {
      name: user.name,
      email: user.email,
    };

    const tokenKey = "123456789";

    const tokenOptions = {
      subject: user.user_id,
    };

    const token = sign(tokenData, tokenKey, tokenOptions);

    return response.status(200).json({ token });
  };
}

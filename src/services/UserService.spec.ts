import { UserService } from "./UserService";
import * as jwt from "jsonwebtoken"

jest.mock("../repositories/UserRepository");
jest.mock("../database", () => {
  initialize: jest.fn();
});
jest.mock("jsonwebtoken")

const userService = new UserService();
const mockUserRepository = require("../repositories/UserRepository");
const mockUser = {
  id_user: "123456",
  name: "test",
  email: "test@senai.com",
  password: "123456",
};

test("Deve adicionar um novo usuário", async () => {
  mockUserRepository.createUSer = jest
    .fn()
    .mockImplementation(() => Promise.resolve(mockUser));

  await userService.createUser("Letícia", "let@senai.com", "123456");
  expect(mockUserRepository.createUser).toHaveBeenCalled();
});

test("Devo retornar um token de usuário", async () => {
  jest
    .spyOn(userService, "getAutenticatedUser")
    .mockImplementation(() => Promise.resolve(mockUser));
    jest.spyOn(jwt, "sign").mockImplementation(() => 'token')
  const token = await userService.getToken("test@senai.com", "123456");
  expect(token).toBe("token")
});

test("Deve retornar um erro caso não encontre um usuário", async () => {
  jest.spyOn(userService, "getAutenticatedUser").mockImplementation(() => Promise.resolve(null))
  await expect(userService.getToken("invalid@test.com", "12345")).rejects.toThrow("Email/password invalid!")
})

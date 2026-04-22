import { Request } from "express";
import { UserService } from "../services/UserService";
import { UserController } from "./UserController";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { AppDataSource } from '../database';


const mockUserService: Partial<UserService> = {
  createUser: jest.fn(),
  deleteUser: jest.fn()
};

jest.mock("../services/UserService", () => {
  return {
    UserService: jest.fn().mockImplementation(() => {
      return {
        mockUserService,
      };
    }),
  };
});

test("Deve adicionar um novo usuário", () => {
  // Usando operador partial para poder moclar o UserService mesmo incompleto
  const userController = new UserController(mockUserService as UserService);

  const mockRequest = {
    body: {
      name: "Letícia",
      email: "let@senai.com",
      password: "password"
    },
  } as Request;
  const mockResponse = makeMockResponse();
  userController.createUser(mockRequest, mockResponse);
  expect(mockResponse.state.status).toBe(201);
  expect(mockResponse.state.json).toMatchObject({ message: "User created!" });
});

test("Deve exibir uma mensagem de erro caso não informe o name", () => {
  // Usando operador partial para poder moclar o UserService mesmo incompleto
  const userController = new UserController(mockUserService as UserService);

  const mockRequest = {
    body: {
      name: "",
      email: "let@senai.com",
      password: "password",
    },
  } as Request;
  const mockResponse = makeMockResponse();
  userController.createUser(mockRequest, mockResponse);
  expect(mockResponse.state.status).toBe(400);
  expect(mockResponse.state.json).toMatchObject({ message: "Bad Request! Todos os campos são obrigatórios" });
});

test("Deve exibir uma mensagem de erro caso não informe o email", () => {
  // Usando operador partial para poder moclar o UserService mesmo incompleto
  const userController = new UserController(mockUserService as UserService);

  const mockRequest = {
    body: {
      name: "Letícia",
      email: "",
      password: "password",
    },
  } as Request;
  const mockResponse = makeMockResponse();
  userController.createUser(mockRequest, mockResponse);
  expect(mockResponse.state.status).toBe(400);
  expect(mockResponse.state.json).toMatchObject({ message: "Bad Request! Todos os campos são obrigatórios" });
});

test("Deve exibir uma mensagem de erro caso não informe a senha", () => {
  // Usando operador partial para poder moclar o UserService mesmo incompleto
  const userController = new UserController(mockUserService as UserService);

  const mockRequest = {
    body: {
      name: "Letícia",
      email: "let@senai.com",
      password: "",
    },
  } as Request;
  const mockResponse = makeMockResponse();
  userController.createUser(mockRequest, mockResponse);
  expect(mockResponse.state.status).toBe(400);
  expect(mockResponse.state.json).toMatchObject({ message: "Bad Request! Todos os campos são obrigatórios" });
});

test("Deve deletar um usuário", () => {
  // Usando operador partial para poder moclar o UserService mesmo incompleto
  const userController = new UserController(mockUserService as UserService);

  const mockRequest = {
    body: {
      name: "Letícia",
      email: "let@senai.com",
    },
  } as Request;
  const mockResponse = makeMockResponse();
  userController.deleteUser(mockRequest, mockResponse);
  expect(mockResponse.state.status).toBe(200);
  expect(mockResponse.state.json).toMatchObject({
    message: "Usuário deletado",
  });
});

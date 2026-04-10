import { Request } from "express";
import { UserService } from "../services/UserService";
import { UserController } from "./UserController";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";


test("Deve adicionar um novo usuário", () => {
    // Usando operador partial para poder moclar o UserService mesmo incompleto
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn()
    } 
    const userController = new UserController(mockUserService as UserService)
    
    const mockRequest = {
        body: {
            name: "Letícia",
            email: "let@senai.com"
        }
    } as Request
    const mockResponse = makeMockResponse()
    userController.createUser(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(201)
    expect(mockResponse.state.json).toMatchObject({message: "User created!"})
})

test("Deve exibir uma mensagem de erro caso não informe o name", () => {
    // Usando operador partial para poder moclar o UserService mesmo incompleto
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn()
    } 
    const userController = new UserController(mockUserService as UserService)
    
    const mockRequest = {
        body: {
            email: "let@senai.com"
        }
    } as Request
    const mockResponse = makeMockResponse()
    userController.createUser(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(400)
    expect(mockResponse.state.json).toMatchObject({message: "Bad Request"})
})

test("Dele chamar a fução getAllUsers",  () => {
    // Usando operador partial para poder moclar o UserService mesmo incompleto
    const mockUserService: Partial<UserService> = {
        getAllUsers: jest.fn()

    } 
    const userController = new UserController(mockUserService as UserService)
    const mockRequest = {} as Request
    const mockResponse = makeMockResponse()
    userController.getAllUsers(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(200)
})
import { UserService } from "./UserService";

jest.mock("../repositories/UserRepository");

const mockUserRepository = require("../repositories/UserRepository");

test("Deve adicionar um novo usuário", async () => {
  const userService = new UserService();
  mockUserRepository.createUSer = jest.fn().mockImplementation(() => Promise.resolve({
    id_user: "123456",
    name: "Letícia",
    email: "let@senai.com",
    password: "123456"
  }))
  
  await userService.createUser("Letícia", "let@senai.com", "123456");
  expect(mockUserRepository.createUser).toHaveBeenCalled();
});

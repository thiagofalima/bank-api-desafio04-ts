import { IUser, UserService } from "./UserService";

test("Deve adicionar um novo usuário", () => {
  // Mockando DB exclusivo para os testes
  const mockDb: IUser[] = [];
  const userService = new UserService(mockDb);
  // Mockando o console para ver o console.
  const mockConsole = jest.spyOn(global.console, "log");
  userService.createUser("Letícia", "let@senai.com");
  expect(mockConsole).toHaveBeenCalledWith(
    "DB atualizado", mockDb
  );
});

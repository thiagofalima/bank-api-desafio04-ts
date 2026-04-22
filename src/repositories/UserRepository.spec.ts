import { getMockEntityManager } from "../__mocks__/mockEntityManager.mock"
import { UserRepository } from "./UserRepository"
import { User } from "../entities/User"
import { EntityManager } from "typeorm"

test("Deve cadastrar um novo usuário no banco de dados", async () => {
    const mockUser: User = {
        user_id: "12345",
        name: "test",
        email: "test@test.com",
        password: "12345"
    }
    
    const managerMock = await getMockEntityManager({
        saveReturn: mockUser
    })
    let userRepository = new UserRepository(managerMock as EntityManager)
    const response = await userRepository.createUser(mockUser)
    expect(managerMock.save).toHaveBeenCalled()
    expect(response).toMatchObject({
        user_id: "12345",
        name: "test",
        email: "test@test.com",
        password: "12345"
    })

})
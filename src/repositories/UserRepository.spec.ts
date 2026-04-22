import { getMockEntityManager } from "../__mocks__/mockEntityManager.mock"
import { UserRepository } from "UserRepository"
import { User } from "../entities/User"
import { EntityManager } from "typeorm"

test("Deve cadastrar um novo usuário no banco de dados", () => {
    let userRepository: new UserRepository
    let managerMock: Partial<EntityManager>

    const mockUSer: User = {
        id_user: "12345",
        name: "test",
        email: "test@test.com",
        password: "12345"

    }
    beforeAll(async () => {
        managerMock = await getMockEntityManager({
            saveReturn: mockUSer
        })
        userRepository = new userRepository(managerMock as EntityManager)
    })

    const return  = await userRepository.createUser(mockUser)
    expect(managerMock.save()).toHaveBeenCalled()
    expect(response).toMatchObject({
        id_user: "12345",
        name: "test",
        email: "test@test.com",
        password: "12345"

    })

})
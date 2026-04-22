import { AppDataSource } from "../database";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

try {
    AppDataSource.initialize()
    console.log("Data Source has been initialized!")
} catch (error) {
    console.error("Error during Data Source initialization", error)
}

export class UserService {
  private userRepository: UserRepository;

  constructor(
    userRepository = new UserRepository(AppDataSource.manager)
  ){
    this.userRepository = userRepository
  }
  
  createUser = async (name: string, email: string, password: string): Promise<User> => {
    const user = new User(name, email, password)
    return this.userRepository.createUser(user)
};

  getUser = () => {
      return null
  };

  deleteUser = () => {
    return null
  }

}


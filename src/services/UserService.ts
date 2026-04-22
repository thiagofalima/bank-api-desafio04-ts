import { sign } from "jsonwebtoken";
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

  getAutenticatedUser = async (email: string, password: string): Promise<User | null> => {
    return this.userRepository.getUserByEmailAndPassword(email, password)
  }

  getToken = async (email: string, password: string): Promise<string> => {
    const user = await this.getAutenticatedUser(email, password)

    if(!user) {
      throw new Error('Email/password invalid!')
    }

    const tokenData = {
      name: user?.name,
      email: user?.email
    }

    const tokenKey = "123456789"

    const tokenOpions = {
      subject: user?.user_id
    }

    const token = sign(tokenData, tokenKey, tokenOpions)
    return token
  }
}


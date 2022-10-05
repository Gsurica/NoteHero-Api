import { CreateUserDTO, IUserRepository } from "../repositories/IUserRepository";
import { hash } from "bcryptjs";
import { Errors } from "../../shared/errors/Errors";

export class CreateUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute({ username, password }: CreateUserDTO) {
    const hashedPassword: string = await hash(password, 10);
    const userAlreadyExists = await this.userRepository.findByUsername({
      username
    });
    if(userAlreadyExists) {
      throw new Errors('Username already in use!', 400);
    } else {
      const user = await this.userRepository.create({
        username,
        password: hashedPassword
      });
      return user;
    }
  }
}
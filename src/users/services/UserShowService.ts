import { User } from "@prisma/client";
import { FindIdUserDTO, IUserRepository } from "../repositories/IUserRepository";

export class UserShowService {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute({ user_id }: FindIdUserDTO): Promise<User> {
    const user = await this.userRepository.showUser({ user_id });
    return user;
  }
}
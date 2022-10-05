import { Errors } from "../../shared/errors/Errors";
import { DeleteUserDTO, IUserRepository } from "../repositories/IUserRepository";

export class DeleteUserService {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute({ user_id }: DeleteUserDTO) {
    const user = this.userRepository.findById({ user_id });
    if(!user) throw new Errors('User not exists!', 404);
    await this.userRepository.delete({ user_id });
  }
}
import { Collaborator } from "@prisma/client";
import { Errors } from "../../shared/errors/Errors";
import { IUserRepository } from "../../users/repositories/IUserRepository";
import { CollabRepository } from "../repositories/CollabRepository";
import { UserIdDTO } from "../repositories/ICollabRepository";

export class getAllCollabsService {
  constructor(private readonly collabRepository: CollabRepository, private readonly userRepository: IUserRepository) {}
  async execute({ user_id }: UserIdDTO): Promise<Collaborator[]> {
    const user = await this.userRepository.findById({ user_id });
    if(!user) throw new Errors("User not exists! or couldnt be logged!", 404);
    const collabs = await this.collabRepository.getAll({ user_id });
    if(!collabs) throw new Errors("No collab are registered!", 404);
    return collabs;
  }
}
import { Collaborator } from "@prisma/client";
import { Errors } from "../../shared/errors/Errors";
import { IUserRepository } from "../../users/repositories/IUserRepository";
import { ICollabRepository, UserIdDTO } from "../repositories/ICollabRepository";

export class ListAllCollabsService {
  constructor(private readonly collabRepository: ICollabRepository, private readonly userRepository: IUserRepository) {}
  async execute({ user_id }: UserIdDTO): Promise<Collaborator[]> {
    const user = await this.userRepository.findById({ user_id });
    if(!user) throw new Errors('User not exists! or couldnt be logged!', 404);
    const collabs = await this.collabRepository.getAll({ user_id });
    if(!collabs) throw new Errors('No collabs here!', 404); 
    return collabs;
  }
}
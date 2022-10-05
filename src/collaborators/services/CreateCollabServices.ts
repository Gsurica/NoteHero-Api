import { CreateCollabDTO, ICollabRepository } from "../repositories/ICollabRepository";

export class CreateCollabServices {
  constructor(private readonly collabRepository: ICollabRepository) {}
  async execute({ name, user_id }: CreateCollabDTO) {
    const collab = await this.collabRepository.create({
      name,
      user_id
    });
    return collab;
  }
}
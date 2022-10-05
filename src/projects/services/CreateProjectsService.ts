import { Project } from "@prisma/client";
import { Errors } from "../../shared/errors/Errors";
import { CreateProjectDTO, IProjectRepository } from "../repositories/IProjectRepository";

export class CreateProjectService {
  constructor(private readonly projectRepository: IProjectRepository) {}
  async execute({ name, user_id }: CreateProjectDTO): Promise<Project> {
    const project = await this.projectRepository.create({
      name,
      user_id
    });
    return project;
  }
}
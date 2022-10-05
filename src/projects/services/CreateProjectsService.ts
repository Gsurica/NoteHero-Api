import { Project } from "@prisma/client";
import { Errors } from "../../shared/errors/Errors";
import { CreateProjectDTO, CreateTaskDTO, IProjectRepository } from "../repositories/IProjectRepository";

export class CreateProjectService {
  constructor(private readonly projectRepository: IProjectRepository) {}
  async execute({ name, user_id }: CreateProjectDTO, { description, task_name }: CreateTaskDTO): Promise<Project> {
    const project = await this.projectRepository.create({
      name,
      user_id
    }, {
      task_name,
      description
    });
    return project;
  }
}
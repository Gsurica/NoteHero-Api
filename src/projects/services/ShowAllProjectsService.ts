import { Project } from "@prisma/client";
import { getAllProjectsDTO, IProjectRepository } from "../repositories/IProjectRepository";


export class ShowAllUserProjectService {
  constructor(private readonly projectRepository: IProjectRepository) {}
  async execute({ user_id }: getAllProjectsDTO): Promise<Project[]> {
    const projects = await this.projectRepository.getAll({ user_id });
    return projects;
  }
}
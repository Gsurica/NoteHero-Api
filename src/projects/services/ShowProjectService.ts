import { Project } from "@prisma/client";
import { IProjectRepository, ShowProjectDTO } from "../repositories/IProjectRepository";


export class ShowProjectService {
  constructor(private readonly projectRepository: IProjectRepository) {}
  async execute({ project_id }: ShowProjectDTO): Promise<Project> {
    const project = await this.projectRepository.showProject({ project_id });
    return project;
  }
}
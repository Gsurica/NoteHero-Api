import { Project } from "@prisma/client";
import { Errors } from "../../shared/errors/Errors";
import { EditprojectDTO, IProjectRepository } from "../repositories/IProjectRepository";

export class EditProjectService {
  constructor(private readonly projectRepository: IProjectRepository) {}
  async execute({ project_id, newName }: EditprojectDTO): Promise<Project> {
    const project = await this.projectRepository.findById({ project_id });
    if (!project) throw new Errors('Project not found!', 404);
    const updatedProject = await this.projectRepository.update({ 
      project_id,
      newName
     });
     return updatedProject;
  }
}
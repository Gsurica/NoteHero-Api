import { Errors } from "../../shared/errors/Errors";
import { IProjectRepository } from "../repositories/IProjectRepository";

export class DeleteProjectService {
  constructor(private readonly projectRepository: IProjectRepository) {}
  async execute(project_id: string): Promise<void> {
    const projectNotExists = await this.projectRepository.findById({ project_id });
    if(!projectNotExists) throw new Errors('Project not found!', 404);
    await this.projectRepository.delete(project_id);
  }
}
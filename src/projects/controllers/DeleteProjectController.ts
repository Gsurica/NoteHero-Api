import { ProjectRepository } from "../repositories/ProjectRepository";
import { DeleteProjectService } from "../services/DeleteProjectService";
import { Request, Response } from 'express';

export class DeleteProjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const deleteProject = new DeleteProjectService(new ProjectRepository());
    const { project_id } = request.params;
    await deleteProject.execute(project_id);
    return response.status(204).json({ message: 'Project deleted!' })
  }
}
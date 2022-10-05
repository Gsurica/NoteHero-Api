import { Request, Response } from 'express';
import { ProjectRepository } from '../repositories/ProjectRepository';
import { EditProjectService } from '../services/EditProjectService';

export class EditprojectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const editService = new EditProjectService(new ProjectRepository());
    const { project_id } = request.params;
    const { newName } = request.body;

    const project = await editService.execute({ newName, project_id });
    
    return response.json(project);
  }
}
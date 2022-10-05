import { Request, Response } from 'express';
import { ProjectRepository } from '../repositories/ProjectRepository';
import { ShowAllUserProjectService } from '../services/ShowAllProjectsService';

export class ShowAllProjectsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const showAllProjects = new ShowAllUserProjectService(new ProjectRepository());
    const { user_id } = request.params;
    const projects = await showAllProjects.execute({
      user_id
    });
    return response.json(projects);
  }
}
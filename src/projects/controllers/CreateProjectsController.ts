import { ProjectRepository } from "../repositories/ProjectRepository";
import { CreateProjectService } from "../services/CreateProjectsService";
import { Request, Response } from 'express';

export class CreateProjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createProjectService = new CreateProjectService(new ProjectRepository());
    const { user_id } = request.params;
    const { name, description, task_name } = request.body;
    const project = await createProjectService.execute({
      name,
      user_id,
    }, {
      description,
      task_name
    });
    return response.status(201).json(project);
  }
}
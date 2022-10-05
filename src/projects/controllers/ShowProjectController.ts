import { Request, Response } from "express";
import { ProjectRepository } from "../repositories/ProjectRepository";
import { ShowProjectService } from "../services/ShowProjectService";


export class ShowProjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const showProjectService = new ShowProjectService(new ProjectRepository());
    const { project_id } = request.params;
    const project = await showProjectService.execute({
      project_id
    });
    return response.status(200).json(project);
  }
}
import { Response, Request } from "express";
import { TaskRepository } from "../repositories/TaskRepository";
import { CreateNewTasksService } from "../services/CreateNewTaskService";

export class CreateNewTasksController {
  async handle(request: Request, response: Response): Promise<Response> {
    const collabAssociateTasks = new CreateNewTasksService(new TaskRepository());
    const { project_id, collab_id } = request.params;
    const { description, task_name } = request.body;
    const task = await collabAssociateTasks.execute({
      project_id,
      description,
      task_name,
    });
    return response.json(task);
  }
}
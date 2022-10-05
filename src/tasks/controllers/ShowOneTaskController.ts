import { Response, Request } from "express";
import { TaskRepository } from "../repositories/TaskRepository";
import { ShowOneTaskService } from "../services/ShowOneTaskService";


export class ShowOneTaskController {
  async handle(request: Request, response: Response): Promise<Response> {
    const showOneTask = new ShowOneTaskService(new TaskRepository());
    const { task_id } = request.params;
    const task = await showOneTask.execute({
      task_id
    });
    return response.json(task);
  }
}
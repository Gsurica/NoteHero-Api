import { Response, Request } from "express";
import { TaskRepository } from "../repositories/TaskRepository";
import { CreateNewTaksWithCollabService } from "../services/CreateNewTaskWithCollabService";

export class CreateNewTaksWithCollabController {
  async handle(request: Request, response: Response): Promise<Response> {
    const collabAssociateTasks = new CreateNewTaksWithCollabService(new TaskRepository());
    const { project_id } = request.params;
    const { description, task_name, collab_id } = request.body;
    const task = await collabAssociateTasks.execute({
      project_id,
      description,
      task_name,
      collab_id,
    });
    return response.json(task);
  }
}
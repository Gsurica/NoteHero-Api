import { Request, Response } from "express";
import { TaskRepository } from "../repositories/TaskRepository";
import { DeleteTaskService } from "../services/DeleteTaskService";

export class DeleteTaskController {
  async handle(request: Request, response: Response): Promise<Response> {
    const deleteTask = new DeleteTaskService(new TaskRepository());
    const { task_id } = request.params;
    await deleteTask.execute({ task_id });
    return response.status(204).json({ message: 'Task deleted!' });
  }
}
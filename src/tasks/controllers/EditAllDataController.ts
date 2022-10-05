import { Request, Response } from "express";
import { TaskRepository } from "../repositories/TaskRepository";
import { EditAllDataService } from "../services/EditAllDataService";

export class EditAllDataController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateTask = new EditAllDataService(new TaskRepository());

    const { newTaskName, newDescription, newCollab } = request.body;
    const { task_id } = request.params;

    const newTask = await updateTask.execute({
      newDescription,
      newTaskName,
      task_id,
      newCollab
    });

    return response.status(201).json(newTask)

  }
}
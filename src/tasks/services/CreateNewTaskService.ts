import { Task } from "@prisma/client";
import { ITaskRepository } from "../repositories/ITaskRepository";
import { CreateTaskDTO } from "../repositories/ITaskRepository";

export class CreateNewTasksService {
  constructor(private readonly tasksRepository: ITaskRepository) {}
  async execute({ description, task_name, project_id }: CreateTaskDTO): Promise<Task> {
    const task = await this.tasksRepository.create({ 
      description,
      task_name,
      project_id,
     });
     return task;
  }
}
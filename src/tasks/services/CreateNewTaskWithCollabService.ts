import { Task } from "@prisma/client";
import { ITaskRepository } from "../repositories/ITaskRepository";
import { CreateTaskDTO } from "../repositories/ITaskRepository";

export class CreateNewTaksWithCollabService {
  constructor(private readonly tasksRepository: ITaskRepository) {}
  async execute({ description, task_name, project_id, collab_id }: CreateTaskDTO): Promise<Task> {
    const task = await this.tasksRepository.createWithCollab({ 
      description,
      task_name,
      project_id,
      collab_id,
     });
     return task;
  }
}
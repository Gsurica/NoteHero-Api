import { Task } from "@prisma/client";
import { ITaskRepository, UpdateTaskDTO } from "../repositories/ITaskRepository";

export class EditAllDataService {
  constructor(private readonly taskRepository: ITaskRepository) {}
  async execute({ newTaskName, newDescription, task_id, newCollab }: UpdateTaskDTO): Promise<Task> {
    const task = await this.taskRepository.updateTask({
      newTaskName,
      newDescription,
      task_id,
      newCollab
    });
    return task;
  }
}
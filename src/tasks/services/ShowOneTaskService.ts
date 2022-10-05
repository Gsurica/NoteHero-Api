import { Task } from "@prisma/client";
import { FindTaskDTO, ITaskRepository } from "../repositories/ITaskRepository";

export class ShowOneTaskService {
  constructor(private readonly tasksRepository: ITaskRepository) {}
  async execute({ task_id }: FindTaskDTO): Promise<Task> {
    const task = await this.tasksRepository.findById({ task_id });
    return task;
  }
}
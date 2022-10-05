import { FindTaskDTO, ITaskRepository } from "../repositories/ITaskRepository";

export class DeleteTaskService {
  constructor(private readonly taskRepository: ITaskRepository) {}
  async execute({ task_id }: FindTaskDTO): Promise<void> {
    await this.taskRepository.delete({ task_id });
  }
}
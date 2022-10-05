import { Task } from "@prisma/client";
import { CreateTaskDTO, DeleteTaskDTO, FindTaskDTO, ITaskRepository } from "./ITaskRepository";
import { database } from "../../shared/database";

export class TaskRepository implements ITaskRepository {
  async create({ task_name, project_id, description }: CreateTaskDTO): Promise<Task> {
    const task = await database.task.create({
      data: {
        name: task_name,
        project: {
          connect: {
            id: project_id
          }
        },
        description,
      },
    });
  }
  async delete({ task_id }: DeleteTaskDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async findById({ task_id }: FindTaskDTO): Promise<Task> {
    throw new Error("Method not implemented.");
  }
  
}
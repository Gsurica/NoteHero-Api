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
      select: {
        name: true,
        id: true,
        collaborator: {
          select: {
            id: true,
            name: true,
            created_at: true,
            delete_at: true,
            managers: true,
            taskId: true,
            tasks: true,
            updated_at: true,
        },
      },
      project: {
        select: {
          id: true,
          name: true,
          tasks: true,
          user: true,
          userId: true,
          created_at: true,
          delete_at: true,
          updated_at: true,
        }
      },
      projectId: true,
      description: true,
      created_at: true,
      delete_at: true,
      updated_at: true,
    }});
    return task;
  }
  async delete({ task_id }: DeleteTaskDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async findById({ task_id }: FindTaskDTO): Promise<Task> {
    throw new Error("Method not implemented.");
  }
  
}
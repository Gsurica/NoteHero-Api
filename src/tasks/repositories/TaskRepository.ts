import { Task } from "@prisma/client";
import { CreateTaskDTO, DeleteTaskDTO, FindTaskDTO, ITaskRepository, UpdateTaskDTO } from "./ITaskRepository";
import { database } from "../../shared/database";

export class TaskRepository implements ITaskRepository {

   async updateTask({ newTaskName, newDescription, task_id, newCollab }: UpdateTaskDTO): Promise<Task> {
    const task = await database.task.update({
      where: {
        id: task_id,
      },
      data: {
        name: newTaskName,
        description: newDescription,
        collaborator: {
          connect: {
            id: newCollab,
          }
        }
      }
    });
    return task;
  } 
  
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
      timetrackers: {
        select: {
          id: true,
          TimeZoneId: true,
          startDate: true,
          endDate: true,
          task: true,
          taskId: true,
          collaborator: true,
          collaboratorId: true,
        }
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

  async createWithCollab({ task_name, project_id, description, collab_id }: CreateTaskDTO): Promise<Task> {
    const task = await database.task.create({
      data: {
        name: task_name,
        project: {
          connect: {
            id: project_id
          }
        },
        description,
        collaborator: {
          connect: {
            id: collab_id
          }
        }
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
      timetrackers: {
        select: {
          id: true,
          TimeZoneId: true,
          startDate: true,
          endDate: true,
          task: true,
          taskId: true,
          collaborator: true,
          collaboratorId: true,
        }
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
    await database.task.delete({
      where: {
        id: task_id,
      }
    });
  }
  
  async findById({ task_id }: FindTaskDTO): Promise<Task> {
    const task = await database.task.findUnique({
      where: {
        id: task_id,
      },
      select: {
        id: true,
        name: true,
        description: true,
        project: true,
        projectId: true,
        collaborator: true,
        created_at: true,
        updated_at: true,
        delete_at: true,
      }
    });
    return task;
  }
  
}
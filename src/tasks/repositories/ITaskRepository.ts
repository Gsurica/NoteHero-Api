import { Collaborator, Task } from "@prisma/client";

export type CreateTaskDTO = {
  task_name: string;
  project_id: string;
  description: string;
  collab_id?: string;
}

export type DeleteTaskDTO = {
  task_id: string;
}

export type FindTaskDTO = {
  task_id: string;
}

export type UpdateTaskDTO = {
  newTaskName: string;
  newDescription: string;
  newCollab: string;
  task_id: string;
}


export interface ITaskRepository {
  create({ task_name, project_id }: CreateTaskDTO): Promise<Task>;
  delete({ task_id }: DeleteTaskDTO): Promise<void>;
  findById({ task_id }: FindTaskDTO): Promise<Task>;
  createWithCollab({ task_name, project_id, description, collab_id }: CreateTaskDTO): Promise<Task>;
  updateTask({ newTaskName, newDescription, task_id, newCollab }: UpdateTaskDTO): Promise<Task>;
}
import { Task } from "@prisma/client";

export type CreateTaskDTO = {
  task_name: string;
  project_id: string;
  collab_id?: string;
  description: string;
}

export type DeleteTaskDTO = {
  task_id: string;
}

export type FindTaskDTO = {
  task_id: string;
}


export interface ITaskRepository {
  create({ task_name, project_id }: CreateTaskDTO): Promise<Task>;
  delete({ task_id }: DeleteTaskDTO): Promise<void>;
  findById({ task_id }: FindTaskDTO): Promise<Task>;
}
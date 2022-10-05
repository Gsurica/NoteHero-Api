import { Project, Task } from "@prisma/client";

export type CreateProjectDTO = {
  name: string;
  user_id: string;
}

export type CreateTaskDTO = {
  task_name: string;
  description: string;
}

export type DeleteProjectDTO = {
  project_id: string;
}

export type FindProjectDTO = {
  project_id: string;
}

export type ShowProjectDTO = {
  project_id: string;
}

export type FindProjectBynNameDTO = {
  project_name: string;
}

export type getAllProjectsDTO = {
  user_id: string;
}

export interface IProjectRepository {
  create({ name }: CreateProjectDTO, { task_name, description  }: CreateTaskDTO): Promise<Project>;
  delete({ project_id }: DeleteProjectDTO): Promise<void>;
  showProject({ project_id }: ShowProjectDTO): Promise<Project>;
  findById({ project_id }: FindProjectDTO): Promise<Project>;
  findByName({ project_name }: FindProjectBynNameDTO): Promise<Project>;
  getAll({ user_id }: getAllProjectsDTO): Promise<Project[]>;
}
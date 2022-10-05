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
  project: string;
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

export type EditprojectDTO = {
  project_id: string;
  newName: string;
}

export interface IProjectRepository {
  create({ name }: CreateProjectDTO, { task_name, description  }: CreateTaskDTO): Promise<Project>;
  delete(project_id: string): Promise<void>;
  showProject({ project_id }: ShowProjectDTO): Promise<Project>;
  findById({ project_id }: FindProjectDTO): Promise<Project>;
  findByName({ project_name }: FindProjectBynNameDTO): Promise<Project>;
  getAll({ user_id }: getAllProjectsDTO): Promise<Project[]>;
  update({ project_id, newName }: EditprojectDTO): Promise<Project>;
}
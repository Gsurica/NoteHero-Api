import { Project, Task } from "@prisma/client";

export type CreateProjectDTO = {
  name: string;
  user_id: string;
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

export interface IProjectRepository {
  create({ name }: CreateProjectDTO): Promise<Project>;
  delete({ project_id }: DeleteProjectDTO): Promise<void>;
  showProject({ project_id }: ShowProjectDTO): Promise<Project>;
  findById({ project_id }: FindProjectDTO): Promise<Project>;
  findByName({ project_name }: FindProjectBynNameDTO): Promise<Project>;
}
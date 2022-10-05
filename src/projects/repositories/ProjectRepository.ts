import { Project } from "@prisma/client";
import { database } from "../../shared/database";
import { CreateProjectDTO, DeleteProjectDTO, FindProjectBynNameDTO, FindProjectDTO, IProjectRepository, ShowProjectDTO } from "./IProjectRepository";

export class ProjectRepository implements IProjectRepository{

  async findById({ project_id }: FindProjectDTO): Promise<Project> {
    const project = await database.project.findUnique({
      where: {
        id: project_id
      }
    });
    return project;
  }

  async findByName({ project_name }: FindProjectBynNameDTO): Promise<Project> {
    const project = await database.project.findFirst({
      where: {
        name: project_name
      }
    }); 
    return project;
  }

  async create({ name, user_id }: CreateProjectDTO): Promise<Project> {
    const project = await database.project.create({
      data: {
        name,
        user: {
          connect: {
            id: user_id
          }
        }
      }
    });
    return project;
  }

  async delete({ project_id }: DeleteProjectDTO): Promise<void> {
    await database.project.delete({ 
        where: {
          id: project_id
      } 
    });
  }

  async showProject({ project_id }: ShowProjectDTO): Promise<Project> {
    const project = await database.project.findUnique({
      where: {
        id: project_id,
      },
      select: {
        id: true,
        name: true,
        created_at: true,
        delete_at: true,
        updated_at: true,
        tasks: true,
        user: true,
        userId: true,
      }
    });
    return project;
  }
  
}
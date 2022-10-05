import { Project } from "@prisma/client";
import { database } from "../../shared/database";
import { CreateProjectDTO, CreateTaskDTO, DeleteProjectDTO, FindProjectBynNameDTO, FindProjectDTO, getAllProjectsDTO, IProjectRepository, ShowProjectDTO } from "./IProjectRepository";

export class ProjectRepository implements IProjectRepository{

  async getAll({ user_id }: getAllProjectsDTO): Promise<Project[]> {
    const projects = await database.project.findMany({
      where: {
        userId: user_id
      },
      select: {
        name: true,
        id: true,
        created_at: true,
        delete_at: true,
        updated_at: true,
        user: true,
        userId: true,
        tasks: {
          select: {
            id: true,
            name: true,
            created_at: true,
            delete_at: true,
            updated_at: true,
            description: true,
            collaborator: {
              select: {
                id: true,
                name: true,
                created_at: true,
                delete_at: true,
                updated_at: true,
                managers: true,
                tasks: true,
                taskId: true,
              }
            },
            project: true,
            projectId: true,
          }
        },
      }
    });
    return projects;
  }

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

  async create({ name, user_id }: CreateProjectDTO, { task_name, description  }: CreateTaskDTO): Promise<Project> {
    const project = await database.project.create({
      data: {
        name,
        tasks: {
          create: {
            name: task_name,
            description
          }
        },
        user: {
          connect: {
            id: user_id
          }
        },
      },
      select: {
        name: true,
        id: true,
        created_at: true,
        delete_at: true,
        updated_at: true,
        user: true,
        userId: true,
        tasks: {
          select: {
            id: true,
            name: true,
            created_at: true,
            delete_at: true,
            updated_at: true,
            description: true,
            collaborator: {
              select: {
                id: true,
                name: true,
                created_at: true,
                delete_at: true,
                updated_at: true,
                managers: true,
                tasks: true,
                taskId: true,
              }
            },
            project: true,
            projectId: true,
          }
        },
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
        tasks: {
          select: {
            id: true,
            name: true,
            created_at: true,
            delete_at: true,
            updated_at: true,
            description: true,
            collaborator: {
              select: {
                id: true,
                name: true,
                created_at: true,
                delete_at: true,
                updated_at: true,
                managers: true,
                tasks: true,
                taskId: true,
              }
            },
            project: true,
            projectId: true,
          }
        },
        user: true,
        userId: true,
      }
    });
    return project;
  }
  
}
import { CreateCollabDTO, DeleteCollabDTO, ICollabRepository, ShowCollab, UserIdDTO } from "./ICollabRepository";
import { database } from "../../shared/database";
import { Collaborator } from "@prisma/client";

export class CollabRepository implements ICollabRepository{

  async getAll({ user_id }: UserIdDTO): Promise<Collaborator[]> {
    const collabs = await database.collaborator.findMany({
      where: {
        managers: {
          some: {
            id: user_id,
          }
        }
      }
    });
    return collabs;
  }

  async delete({ collab_id }: DeleteCollabDTO): Promise<void> {
    const collab = await database.collaborator.findUnique({
      where: {
        id: collab_id
      }
    });

    await database.collaborator.delete({
      where: {
        id: collab.id
      }
    });
  }

  async create({ name, user_id }: CreateCollabDTO): Promise<Collaborator> {

    const collab = await database.collaborator.create({
      data: {
        name,
        managers: {
          connect: {
            id: user_id
          }
        },
      },
      select: {
        name: true,
        managers: true,
        created_at: true,
        updated_at: true,
        id: true,
        delete_at: true,
        tasks: true,
        taskId: true,
      }
    });
    
    return collab
  }
}
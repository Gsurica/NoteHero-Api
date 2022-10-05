import { CreateCollabDTO, DeleteCollabDTO, ICollabRepository } from "./ICollabRepository";
import { database } from "../../shared/database";
import { Collaborator } from "@prisma/client";

export class CollabRepository implements ICollabRepository{
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

  async create({ name, user_id, task_id }: CreateCollabDTO): Promise<Collaborator> {

    const collab = await database.collaborator.create({
      data: {
        name,
        managers: {
          connect: {
            id: user_id
          }
        },
        tasks: {  
          connect: {
            id: task_id
          }
        }
      },
      select: {
        name: true,
        managers: true,
        created_at: true,
        updated_at: true,
        id: true,
        delete_at: true,
        tasks: true,
      }
    });
    return collab;
  }
}
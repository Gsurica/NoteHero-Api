import { Collaborator, User } from '@prisma/client'

export type CreateCollabDTO = {
  name: string;
  user_id: string
  task_id?: string;
}


export type UserIdDTO = {
  user_id: string;
}

export type DeleteCollabDTO = {
  collab_id: string,
  user_id: string | string[];
}

export type ShowCollab = {
  user_id: string;
  collab_id: string;
}

export interface ICollabRepository {
  create({ name, user_id }: CreateCollabDTO): Promise<Collaborator>;
  delete({ collab_id }: DeleteCollabDTO): Promise<void>;
  getAll({ user_id }: UserIdDTO): Promise<Collaborator[]>;
}
import { User } from "@prisma/client";
import e from "express";

export type CreateUserDTO = {
  username: string;
  password: string;
}

export type DeleteUserDTO = {
  user_id: string;
}

export type FindIdUserDTO = {
  user_id: string;
}

export type FindUsernameDTO = {
  username: string;
}


export interface IUserRepository {
  create({ username, password }: CreateUserDTO): Promise<Omit<User, 'password'>>;
  delete({ user_id }: DeleteUserDTO): Promise<void>;
  findById({ user_id }: FindIdUserDTO): Promise<User>;
  findByUsername({ username }: FindUsernameDTO): Promise<User>;
  showUser({ user_id }: FindIdUserDTO): Promise<User>;
}
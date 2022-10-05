import { User } from '@prisma/client';
import { database } from '../../shared/database';
import { CreateUserDTO, DeleteUserDTO, FindIdUserDTO, IUserRepository, FindUsernameDTO } from './IUserRepository';


export class UserRepository implements IUserRepository {
  async findById({ user_id }: FindIdUserDTO): Promise<User> {
    const user = await database.user.findUnique({
      where: {
        id: user_id
      }
    });
    return user;
  }

  async showUser({ user_id }: FindIdUserDTO): Promise<User> {
    const user = await database.user.findUnique({
      where: {
        id: user_id
      },
      select: {
        id: true,
        collaborators: true,
        username: true,
        created_at: true,
        delete_at: true,
        updated_at: true,
        password: true,
        projects: true,
      }
    });

    return user;
  }

  async findByUsername({ username }: FindUsernameDTO): Promise<User> {
    const user = await database.user.findUnique({
      where: {
        username: username
      }
    });
    return user;
  }

  async create({ username, password }: CreateUserDTO): Promise<User> {
    const user = await database.user.create({
      data: {
        username,
        password,
      },
      select: {
        id: true,
        username: true,
        password: true,
        created_at: true,
        updated_at: true,
        delete_at: true,
      }
    });
    return user;
  }

  async delete({ user_id }: DeleteUserDTO): Promise<void> {
    const user = await database.user.findUnique({
      where: {
        id: user_id
      }
    });
    await database.user.delete({ where: user });
  }
}
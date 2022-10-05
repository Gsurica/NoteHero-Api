import { Request, Response } from 'express';
import { database } from '../../shared/database';

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { user_id } = request.params;
    const user = await database.user.findUnique({
      where: {
        id: user_id
      },
      select: {
        username: true
      }
    });
    if(!user) throw new Error('User not exists!');
    await database.user.delete({ where: user }); 
    return response.status(201).send()
  }
}
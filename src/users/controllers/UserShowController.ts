import { Request, Response } from 'express';
import { UserRepository } from '../repositories/UserRepository';
import { UserShowService } from '../services/UserShowService';

export class UserShowController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userShowService = new UserShowService(new UserRepository());
    const { user_id } = request.params;
    const user = await userShowService.execute({ user_id });
    return response.status(200).json(user);
  }
}
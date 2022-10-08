import { CollabRepository } from '../repositories/CollabRepository';
import { Request, Response } from 'express';
import { getAllCollabsService } from '../services/getAllCollabsService';
import { UserRepository } from 'src/users/repositories/UserRepository';

export class GetAllCollabController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getAllcollabService = new getAllCollabsService(new CollabRepository(), new UserRepository());

    const { user_id } = request.params;

    const collab = await getAllcollabService.execute({ user_id });

    return response.status(201).json(collab);
    
  }
}
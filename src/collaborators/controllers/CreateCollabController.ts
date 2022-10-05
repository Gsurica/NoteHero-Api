import { CreateCollabServices } from '../services/CreateCollabServices';
import { CollabRepository } from '../repositories/CollabRepository';
import { Request, Response } from 'express';

export class CreateCollabController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createCollabService = new CreateCollabServices(new CollabRepository());

    const { user_id, task_id } = request.params;
    const { name } = request.body;

    const collab = await createCollabService.execute({
      name,
      user_id,
    });

    return response.status(201).json(collab);
    
  }
}
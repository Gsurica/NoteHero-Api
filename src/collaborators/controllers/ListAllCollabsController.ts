import { Request, Response } from "express";
import { UserRepository } from "../../users/repositories/UserRepository";
import { CollabRepository } from "../repositories/CollabRepository";
import { ListAllCollabsService } from "../services/ListAllCollabsService";

export class ListAllCollabsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllCollabs = new ListAllCollabsService(new CollabRepository(), new UserRepository());
    const { user_id } = request.params;
    const collabs = await listAllCollabs.execute({ user_id });
    return response.json(collabs);
  }
}
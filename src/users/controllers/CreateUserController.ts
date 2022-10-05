import { UserRepository } from "../repositories/UserRepository";
import { CreateUserService } from "../services/CreateUserService";
import { Request, Response } from "express";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createUserService = new CreateUserService(new UserRepository())
    const { username, password } = request.body;
    const user = await createUserService.execute({
      username,
      password
    });
    return response.status(201).json(user)
  }
}
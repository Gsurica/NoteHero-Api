import { LoginUserService } from "../services/LoginUserService";
import { UserRepository } from "../repositories/UserRepository";  
import { Request, Response } from "express";

export class LoginUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const loginUserService = new LoginUserService(new UserRepository());
    const { username, password } = request.body;
    const { user, token } = await loginUserService.execute({
      username,
      password
    });
    return response.status(200).json({
      user,
      token
    });
  }
}

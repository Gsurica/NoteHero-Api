import { User } from "@prisma/client";
import { IUserRepository } from "../repositories/IUserRepository";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import auth from '../../shared/config/auth';
import { Errors } from "../../shared/errors/Errors";

type CreateLoginDTO = {
  username: string;
  password: string;
}

type LoginResponse = {
  user: User,
  token: string;
} 

export class LoginUserService {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute({ username, password }: CreateLoginDTO): Promise<LoginResponse> {
    const user = await this.userRepository.findByUsername({ username });
    if(!user) throw new Errors('User not exists!', 404);
    const confirmedPass = compare(password, user.password);
    if(!confirmedPass) throw new Errors('password/email are incorrect!', 400);
    const token = sign({}, auth.jwt.secret, {
      expiresIn: auth.jwt.expiresIn,
      subject: user.id
    });
    return {
      user,
      token
    }
  }
}
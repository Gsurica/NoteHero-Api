import { Request, Response, NextFunction } from 'express';
import { Secret, verify } from 'jsonwebtoken';
import auth from '../config/auth';
import { Errors } from '../errors/Errors';

type JwtPayload = {
  id: string;
}

export const userAuthenticated = (request: Request, response: Response, next: NextFunction) => {
  const { authorization } = request.headers;
  if(!authorization) throw new Errors('Failed to verify token!', 500);

  const token = authorization.split(' ')[1];
  
  try {
    verify(token, process.env.JWT_SECRET);
    return next();
  } catch (error) {
    console.log(error);
  }


}
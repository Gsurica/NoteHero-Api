import { Request, Response, NextFunction } from 'express';
import { Secret, verify } from 'jsonwebtoken';
import auth from '../config/auth';
import { Errors } from '../errors/Errors';

export const userAuthenticated = (request: Request, response: Response, next: NextFunction) => {
  const authHeader = request.headers.authorization;
  if(!authHeader) throw new Errors('Failed to verify token!', 500); 
  const token = authHeader.replace('Bearer ', '');
  try {
    verify(token, auth.jwt.secret as Secret);
    return next();
  } catch (error) {
    console.log(error)
    throw new Errors('invalid authentication token!', 500);
  }
}
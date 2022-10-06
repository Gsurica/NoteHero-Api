import 'express-async-errors'
import express from 'express';
import { routes } from './routes';
import cors from 'cors';
import { Request, Response, NextFunction } from 'express';
import { Errors } from '../errors/Errors';

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Errors) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    console.log(error);
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.use(routes);

app.listen(3333);

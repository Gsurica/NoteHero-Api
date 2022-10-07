import { Response, Request, NextFunction } from "express";

export const timeTracking = (request: Request, response: Response, next: NextFunction) => {
  const { startDate, endDate } = request.body;
  
}
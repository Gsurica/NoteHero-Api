import { Request, Response, NextFunction } from "express";
import { convertStringToDateFunction } from "../../functions/convertingStringToDate";

export const convertStringToDate = (request: Request, response: Response, next: NextFunction) => {
  const { startDate, endDate } = request.body;
  
  convertStringToDateFunction(startDate);
  convertStringToDateFunction(endDate);

  return next();
}
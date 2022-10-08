import { Router } from "express";
import { CreateTimeTrackerController } from "../controllers/CreateTimeTrackerController";
import { convertStringToDate } from "../../shared/middlewares/convertStringToDate";
import { celebrate, Segments, Joi } from "celebrate";

const timetrackerRoutes = Router();

const createTimeTracker = new CreateTimeTrackerController();

timetrackerRoutes.use(convertStringToDate);

timetrackerRoutes.post('/:user_id/:project_id/:task_id', 
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      startDate: Joi.string().required().min(20),
      endDate: Joi.string().required().min(20),
      collaborator_id: Joi.string().uuid().required(),
      task_id: Joi.string().uuid().required().required(),
    }),
    [Segments.PARAMS]: {
      user_id: Joi.string().uuid().required(),
      project_id: Joi.string().uuid().required(),
      task_id: Joi.string().uuid().required(),
    }
  })
,createTimeTracker.handle);

export { timetrackerRoutes }
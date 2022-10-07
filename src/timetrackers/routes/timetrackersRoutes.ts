import { Router } from "express";
import { CreateTimeTrackerController } from "../controllers/CreateTimeTrackerController";
import { convertStringToDate } from "../../shared/middlewares/convertStringToDate";

const timetrackerRoutes = Router();

const createTimeTracker = new CreateTimeTrackerController();

timetrackerRoutes.use(convertStringToDate);
timetrackerRoutes.post('/:user_id/:project_id/:task_id', createTimeTracker.handle);

export { timetrackerRoutes }
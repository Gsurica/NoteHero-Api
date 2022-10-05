import { Router } from "express";
import { userAuthenticated } from "../../shared/middlewares/UserAutheticated";
import { CollabAssociateTasksController } from "../controllers/CollabAssociateTasksController";

const taskRoutes = Router();

const createAssociateCollabTasks = new CollabAssociateTasksController();

taskRoutes.use(userAuthenticated);
taskRoutes.post('/:user_id/:project_id/:collab_id', createAssociateCollabTasks.handle);

export { taskRoutes }
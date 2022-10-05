import { Router } from "express";
import { userAuthenticated } from "../../shared/middlewares/UserAutheticated";
import { CreateCollabController } from "../controllers/CreateCollabController";
const collabRoutes = Router();

const createCollab = new CreateCollabController();

collabRoutes.use(userAuthenticated);

collabRoutes.post('/:user_id/:task_id', createCollab.handle);
collabRoutes.delete('/:user_id/:collab_id');

export { collabRoutes }
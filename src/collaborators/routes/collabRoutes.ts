import { Router } from "express";
import { userAuthenticated } from "../../shared/middlewares/UserAutheticated";
import { CreateCollabController } from "../controllers/CreateCollabController";
import { celebrate, Joi, Segments } from "celebrate";

const collabRoutes = Router();

const createCollab = new CreateCollabController();

collabRoutes.use(userAuthenticated);

collabRoutes.post('/:user_id', 
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required()
    }),
    [Segments.PARAMS]: {
      user_id: Joi.string().id().required()
    }
  })
,createCollab.handle);
collabRoutes.get('/:user_id');
collabRoutes.get('/:user_id/:collab_id');
collabRoutes.delete('/:user_id/:collab_id');

export { collabRoutes }
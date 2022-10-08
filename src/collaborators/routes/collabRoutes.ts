import { Router } from "express";
import { userAuthenticated } from "../../shared/middlewares/UserAutheticated";
import { CreateCollabController } from "../controllers/CreateCollabController";
import { ListAllCollabsController } from "../controllers/ListAllCollabsController";
import { celebrate, Joi, Segments } from "celebrate";

const collabRoutes = Router();

const createCollab = new CreateCollabController();
const listAllCollabs = new ListAllCollabsController();

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
, createCollab.handle);
collabRoutes.get('/:user_id', listAllCollabs.handle);
export { collabRoutes }
import {CreateUserController}  from "../controllers/CreateUserController";
import { DeleteUserController } from "../controllers/DeleteUserController";
import { LoginUserController } from "../controllers/LoginUserController";
import { Router } from "express";
import { userAuthenticated } from "../../shared/middlewares/UserAutheticated";
import { UserShowController } from "../controllers/UserShowController";
import { celebrate, Joi, Segments } from "celebrate";

const userRouter = Router();

const createUser = new CreateUserController();
const deleteUser = new DeleteUserController();
const loginUser = new LoginUserController();
const showUser = new UserShowController()

userRouter.post('/', 
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      username: Joi.string().required().min(4),
      password: Joi.string().required().min(4).max(20)
    })
  })
,createUser.handle);
userRouter.post('/login', 
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      username: Joi.string().required(),
      password: Joi.string().required()
    })
  })
,loginUser.handle);

userRouter.use(userAuthenticated);
userRouter.delete('/:user_id', deleteUser.handle);
userRouter.get('/:user_id', showUser.handle);

export { userRouter };
import {CreateUserController}  from "../controllers/CreateUserController";
import { DeleteUserController } from "../controllers/DeleteUserController";
import { LoginUserController } from "../controllers/LoginUserController";
import { Router } from "express";
import { userAuthenticated } from "../../shared/middlewares/UserAutheticated";
import { UserShowController } from "../controllers/UserShowController";

const userRouter = Router();

const createUser = new CreateUserController();
const deleteUser = new DeleteUserController();
const loginUser = new LoginUserController();
const showUser = new UserShowController()

userRouter.post('/', createUser.handle);
userRouter.post('/login', loginUser.handle);

userRouter.use(userAuthenticated);
userRouter.delete('/:user_id', deleteUser.handle);
userRouter.get('/:user_id', showUser.handle);

export { userRouter };
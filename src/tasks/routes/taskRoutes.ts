import { Router } from "express";
import { userAuthenticated } from "../../shared/middlewares/UserAutheticated";
import { CreateNewTasksController } from "../controllers/CreateNewTaksController";
import { CreateNewTaksWithCollabController } from "../controllers/CreateNewTaskWithCollabController";
import { DeleteTaskController } from "../controllers/DeleteTaskController";
import { EditAllDataController } from "../controllers/EditAllDataController";
import { ShowOneTaskController } from "../controllers/ShowOneTaskController";

const taskRoutes = Router();

const createNewTask = new CreateNewTasksController();
const createNewTaksWithCollab = new CreateNewTaksWithCollabController();
const showOneTask = new ShowOneTaskController();
const deleteTask = new DeleteTaskController();
const editTasks = new EditAllDataController();

taskRoutes.use(userAuthenticated);

taskRoutes.get('/:user_id/:project_id/:task_id', showOneTask.handle);
//taskRoutes.post('/:user_id/:project_id', createNewTask.handle);
taskRoutes.post('/:user_id/:project_id', createNewTaksWithCollab.handle);
taskRoutes.patch('/:user_id/:project_id/:task_id', editTasks.handle);
taskRoutes.delete('/:user_id/:project_id/:task_id', deleteTask.handle);

export { taskRoutes }
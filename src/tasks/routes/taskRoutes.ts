import { Router } from "express";
import { userAuthenticated } from "../../shared/middlewares/UserAutheticated";
import { CreateNewTasksController } from "../controllers/CreateNewTaksController";
import { CreateNewTaksWithCollabController } from "../controllers/CreateNewTaskWithCollabController";
import { DeleteTaskController } from "../controllers/DeleteTaskController";
import { EditAllDataController } from "../controllers/EditAllDataController";
import { ShowOneTaskController } from "../controllers/ShowOneTaskController";
import { celebrate, Joi, Segments } from "celebrate";

const taskRoutes = Router();

const createNewTask = new CreateNewTasksController();
const createNewTaksWithCollab = new CreateNewTaksWithCollabController();
const showOneTask = new ShowOneTaskController();
const deleteTask = new DeleteTaskController();
const editTasks = new EditAllDataController();

taskRoutes.use(userAuthenticated);

taskRoutes.get('/:user_id/:project_id/:task_id', 
  celebrate({
    [Segments.PARAMS]: {
      user_id: Joi.string().uuid().required(),
      project_id: Joi.string().uuid().required()
    }
  })
,showOneTask.handle);
//taskRoutes.post('/:user_id/:project_id', createNewTask.handle);
taskRoutes.post('/:user_id/:project_id', 
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      task_name: Joi.string().required(),
      description: Joi.string().required(),
      collab_id: Joi.string(),
    }),
    [Segments.PARAMS]: {
      user_id: Joi.string().uuid().required(),
      project_id: Joi.string().uuid().required()
    }
  })
,createNewTaksWithCollab.handle);
taskRoutes.patch('/:user_id/:project_id/:task_id', 
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      task_name: Joi.string().required(),
      description: Joi.string().required(),
      collab_id: Joi.string(),
    }),
    [Segments.PARAMS]: {
      user_id: Joi.string().uuid().required(),
      project_id: Joi.string().uuid().required(),
      task_id: Joi.string().uuid().required(),
    }
  })
,editTasks.handle);
taskRoutes.delete('/:user_id/:project_id/:task_id', 
  celebrate({
    [Segments.PARAMS]: {
      user_id: Joi.string().uuid().required(),
      project_id: Joi.string().uuid().required(),
      task_id: Joi.string().uuid().required(),
    }
  })
,deleteTask.handle);

export { taskRoutes }
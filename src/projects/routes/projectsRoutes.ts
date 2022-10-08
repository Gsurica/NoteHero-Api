import { Router } from "express"; 
import { userAuthenticated } from "../../shared/middlewares/UserAutheticated";
import { CreateProjectController } from "../controllers/CreateProjectsController";
import { DeleteProjectController } from "../controllers/DeleteProjectController";
import { EditprojectController } from "../controllers/EditProjectController";
import { ShowAllProjectsController } from "../controllers/ShowAllProjectsController";
import { ShowProjectController } from "../controllers/ShowProjectController";

const projectsRoutes = Router();

const createProject = new CreateProjectController();
const showProject = new ShowProjectController();
const showAllProjects = new ShowAllProjectsController();
const deleteProject = new DeleteProjectController();
const editProject = new EditprojectController();
import { celebrate, Joi, Segments } from "celebrate";

projectsRoutes.use(userAuthenticated);
projectsRoutes.post('/:user_id', 
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required().min(4),
      description: Joi.string().required(),
      task_name: Joi.string().required().min(4),
    }),
    [Segments.PARAMS]: {
      user_id: Joi.string().uuid().required(),
    }
  })
,createProject.handle);
projectsRoutes.delete('/:user_id/:project_id', 
  celebrate({
    [Segments.PARAMS]: {
      user_id: Joi.string().uuid().required(),
      project_id: Joi.string().uuid().required(),
    }
  })
,deleteProject.handle);
projectsRoutes.get('/:user_id', 
  celebrate({
    [Segments.PARAMS]: {
      user_id: Joi.string().uuid().required(),
    }
  })
,showAllProjects.handle);
projectsRoutes.get('/:user_id/:project_id', 
  celebrate({
    [Segments.PARAMS]: {
      user_id: Joi.string().uuid().required(),
      project_id: Joi.string().uuid().required(),
    }
  })
,showProject.handle);
projectsRoutes.put('/:user_id/:project_id', 
  celebrate({
    [Segments.BODY]: {
      newName: Joi.string().required().min(4),
    }
  })
,editProject.handle);

export { projectsRoutes }
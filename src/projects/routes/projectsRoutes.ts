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

projectsRoutes.use(userAuthenticated)
projectsRoutes.post('/:user_id', createProject.handle);
projectsRoutes.delete('/:user_id/:project_id', deleteProject.handle);
projectsRoutes.get('/:user_id', showAllProjects.handle);
projectsRoutes.get('/:user_id/:project_id', showProject.handle);
projectsRoutes.put('/:user_id/:project_id', editProject.handle);

export { projectsRoutes }
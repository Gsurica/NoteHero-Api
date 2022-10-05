import { Router } from "express"; 
import { userAuthenticated } from "../../shared/middlewares/UserAutheticated";
import { CreateProjectController } from "../controllers/CreateProjectsController";
import { ShowAllProjectsController } from "../controllers/ShowAllProjectsController";
import { ShowProjectController } from "../controllers/ShowProjectController";

const projectsRoutes = Router();

const createProject = new CreateProjectController();
const showProject = new ShowProjectController();
const showAllProjects = new ShowAllProjectsController();

projectsRoutes.use(userAuthenticated)
projectsRoutes.post('/:user_id', createProject.handle);
projectsRoutes.delete('/:user_id/:project_id');
projectsRoutes.get('/:user_id', showAllProjects.handle);
projectsRoutes.get('/:user_id/:project_id', showProject.handle);

export { projectsRoutes }
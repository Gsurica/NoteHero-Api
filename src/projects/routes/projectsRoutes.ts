import { Router } from "express"; 
import { userAuthenticated } from "../../shared/middlewares/UserAutheticated";
import { CreateProjectController } from "../controllers/CreateProjectsController";

const projectsRoutes = Router();

const createProject = new CreateProjectController();

projectsRoutes.use(userAuthenticated)
projectsRoutes.post('/:user_id', createProject.handle);
projectsRoutes.delete('/:user_id/:project_id');
projectsRoutes.get('/:user_id');

export { projectsRoutes }
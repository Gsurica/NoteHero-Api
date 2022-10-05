import { Router } from "express";


const taskRoutes = Router();

taskRoutes.get('/:user_id/:project_id');

export { taskRoutes }
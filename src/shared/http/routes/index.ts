import { Router } from "express";
import { projectsRoutes } from "../../../projects/routes/projectsRoutes";
import { collabRoutes } from '../../../collaborators/routes/collabRoutes';
import { userRouter } from '../../../users/routes/userRoutes';
import { taskRoutes } from "../../../tasks/routes/taskRoutes";
import { timetrackerRoutes } from "../../../timetrackers/routes/timetrackersRoutes";

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({
    ok: true
  });
});

routes.use('/user', userRouter);
routes.use('/collab', collabRoutes);
routes.use('/projects', projectsRoutes);
routes.use('/tasks', taskRoutes);
routes.use('/timetrackers', timetrackerRoutes);


export { routes }
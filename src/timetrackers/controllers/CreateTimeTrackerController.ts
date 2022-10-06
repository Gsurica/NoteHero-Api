import { Request, Response } from "express";
import { TimeTrackerRepository } from "../repositories/TimeTrackerRepository";
import { CreateTimeTrackerService } from "../services/CreateTimeTrackerService";

export class CreateTimeTrackerController {
  async handle(request: Request, response: Response) {
    const createTimeTrackerService = new CreateTimeTrackerService(new TimeTrackerRepository());
    const { startDate, endDate, TimeZoneId, collaborator_id, task_id } = request.body;
    const timeTracker = await createTimeTrackerService.execute({
      startDate,
      endDate,
      TimeZoneId: Intl.DateTimeFormat().resolvedOptions().timeZone,
      collaborator_id,
      task_id,
    });
    return response.status(201).json(timeTracker);
  }
}
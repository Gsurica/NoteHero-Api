import { Request, Response } from "express";
import { TimeTrackerRepository } from "../repositories/TimeTrackerRepository";
import { CreateTimeTrackerService } from "../services/CreateTimeTrackerService";
import Moment from "moment";

export class CreateTimeTrackerController {
  async handle(request: Request, response: Response) {
    const createTimeTrackerService = new CreateTimeTrackerService(new TimeTrackerRepository());
    const { task_id } = request.params;
    const { startDate, endDate, TimeZoneId, collaborator_id } = request.body;
    console.log(Moment(endDate, "DD/MM/YYYY hh:mm:ss"))
    const timeTracker = await createTimeTrackerService.execute({
      startDate: Moment(startDate, "DD/MM/YYYY hh:mm:ss").toDate(),
      endDate: Moment(endDate, "DD/MM/YYYY hh:mm:ss").toDate(),
      year: Number(Moment(startDate).format("YYYY")),
      day: Number(Moment(startDate).format("DD")),
      month: Number(Moment(startDate).format("MM")),
      timeDiff: Moment.duration(Moment(endDate, "DD/MM/YYYY hh:mm:ss").diff(Moment(startDate, "DD/MM/YYYY hh:mm:ss"))).asHours(),
      TimeZoneId: Intl.DateTimeFormat().resolvedOptions().timeZone,
      collaborator_id,
      task_id,
    });
    return response.status(201).json({
      timeTracker,
    });
  }
}
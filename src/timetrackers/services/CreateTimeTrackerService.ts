import { TimeTracker } from "@prisma/client";
import { Errors } from "../../shared/errors/Errors";
import { CreateTimeTrackerDTO, ITimeTrackerRepository } from "../repositories/ITimeTrackerRepository";


export class CreateTimeTrackerService {
  constructor(private readonly timeTrackerRepository: ITimeTrackerRepository) {}
  async execute({ TimeZoneId, startDate, endDate, collaborator_id, task_id, year, day, month, timeDiff }: CreateTimeTrackerDTO): Promise<TimeTracker> {
    if (startDate.getTime() > endDate.getTime()) {
      throw new Errors('The time tracker cannot have a start date higher than the end date!');
    }
    if (startDate.getDate() !== new Date().getDate() && endDate.getDate() !== new Date().getDate()) {
      throw new Errors('The time tracker mustnt have a more than 24 hours of duration or less than it!');
    }
    const timeTracker = await this.timeTrackerRepository.create({ TimeZoneId, startDate, endDate, collaborator_id, task_id, year, day, month, timeDiff });
    return timeTracker;
  }
}
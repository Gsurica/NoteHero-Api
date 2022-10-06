import { TimeTracker } from "@prisma/client";
import { Errors } from "../../shared/errors/Errors";
import { CreateTimeTrackerDTO, ITimeTrackerRepository } from "../repositories/ITimeTrackerRepository";


export class CreateTimeTrackerService {
  constructor(private readonly timeTrackerRepository: ITimeTrackerRepository) {}
  async execute({ TimeZoneId, startDate, endDate, collaborator_id, task_id }: CreateTimeTrackerDTO): Promise<TimeTracker> {
    const timeTracker = await this.timeTrackerRepository.create({ TimeZoneId, startDate, endDate, collaborator_id, task_id });
    return timeTracker;
  }
}
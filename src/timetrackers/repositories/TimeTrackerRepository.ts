import { TimeTracker } from "@prisma/client";
import { CreateTimeTrackerDTO, DeleteTimeTrackerDTO, ITimeTrackerRepository } from "./ITimeTrackerRepository";
import { database } from "../../shared/database";


export class TimeTrackerRepository implements ITimeTrackerRepository {

  async create({ startDate, endDate, TimeZoneId, task_id, collaborator_id }: CreateTimeTrackerDTO): Promise<TimeTracker> {
    const timeTracker = await database.timeTracker.create({
      data: {
        TimeZoneId: Intl.DateTimeFormat().resolvedOptions().timeZone,
        endDate,
        startDate,
        task: {
          connect: {
            id: task_id
          }
        },
        collaborator: {
          connect: {
            id: collaborator_id
          }
        }
      },
      select: {
        id: true,
        TimeZoneId: true,
        startDate: true,
        endDate: true,
        collaborator: true,
        collaboratorId: true,
        task: true,
        taskId: true,
      }
    });
    return timeTracker;
  }

  async delete({ timetracker_id }: DeleteTimeTrackerDTO): Promise<void> {
    await database.timeTracker.delete({
      where: {
        id: timetracker_id,
      }
    });
  }

}
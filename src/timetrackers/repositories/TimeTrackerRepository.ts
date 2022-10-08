import { TimeTracker } from "@prisma/client";
import { CreateTimeTrackerDTO, DeleteTimeTrackerDTO, GetDayHourDTO, ITimeTrackerRepository } from "./ITimeTrackerRepository";
import { database } from "../../shared/database";

export class TimeTrackerRepository implements ITimeTrackerRepository {

  async getDayHours() {
    const hours = await database.timeTracker.groupBy({
      by: ['taskId', 'day', 'month', 'year'],
      _sum: {
        timeDiff: true,
      }
    });
    return hours;
  }

  async getMonthHours(){
    const months = await database.timeTracker.groupBy({
      by: ['taskId', 'month', 'year'],
      _sum: {
        timeDiff: true,
      }
    });
    return months;
  }

  async getYearHours() {
    const years = await database.timeTracker.groupBy({
      by: ['taskId', 'year'],
      _sum: {
        timeDiff: true,
      }
    });
    return years;
  }

  async create({ startDate, endDate, TimeZoneId, task_id, collaborator_id, year, day, month, timeDiff }: CreateTimeTrackerDTO): Promise<TimeTracker> {
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
        },
        year,
        month,
        day,
        timeDiff,
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
        timeDiff: true,
        day: true,
        month: true,
        year: true,
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
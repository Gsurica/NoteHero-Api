import { TimeTracker } from "@prisma/client";

export type CreateTimeTrackerDTO = {
  startDate: Date;
  endDate: Date;
  TimeZoneId: string;
  task_id: string;
  collaborator_id: string;
  year?: number;
  day?: number;
  month?: number;
  timeDiff: number;
}

export type DeleteTimeTrackerDTO = {
  timetracker_id: string;
}

export type GetDayHourDTO = {
  id: string;
}

export interface ITimeTrackerRepository {
  create({ startDate, endDate, TimeZoneId, task_id, collaborator_id }: CreateTimeTrackerDTO): Promise<TimeTracker>;
  delete({ timetracker_id }: DeleteTimeTrackerDTO): Promise<void>;
}
import { ITimeTrackerRepository } from "../repositories/ITimeTrackerRepository";
import moment from 'moment';

export class TackingHoursDayService { 
  constructor(private readonly timeTrackerRepository: ITimeTrackerRepository) {}
  async execute() {
    const hours = await this.timeTrackerRepository.getDayHours();
  }
}
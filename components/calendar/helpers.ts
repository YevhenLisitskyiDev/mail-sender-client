import moment from "moment";
import { Moment } from "moment";
import { Schedule } from "../../utils/types/schedules";

export function getMultiplierAndFrequency(
  scheduleFrequency: string
): [number, moment.unitOfTime.DurationConstructor] {
  const [multiplierString, frequency] = scheduleFrequency.includes("*")
    ? scheduleFrequency.split("*")
    : ["1", scheduleFrequency];
  const multiplier = parseInt(multiplierString);
  switch (frequency) {
    case "daily":
      return [multiplier, "days"];
    case "weekly":
      return [multiplier, "weeks"];
    case "monthly":
      return [multiplier, "months"];
    case "yearly":
      return [multiplier, "years"];
    default:
      return [multiplier, "days"];
  }
}

export function getDatesFromSchedule(schedule: Schedule): Moment[] {
  const dates = [];
  const start = moment(schedule.start);
  const end = moment(schedule.end);
  if (schedule.frequency) {
    const [multyplier, frequency] = getMultiplierAndFrequency(
      schedule.frequency
    );
    while (start.isBefore(end)) {
      dates.push(start.clone());
      start.add(multyplier, frequency);
    }
  }
  if (schedule.customDates) {
    schedule.customDates.forEach((date) => {
      dates.push(moment(date));
    }
    );
  }

  return dates.sort((a, b) => a.diff(b));
}

export function getDatesFromSchedules(schedules: Schedule[]): Moment[] {
  const dates = [];
  for (const schedule of schedules) {
    dates.push(...getDatesFromSchedule(schedule));
  }
  return dates;
}

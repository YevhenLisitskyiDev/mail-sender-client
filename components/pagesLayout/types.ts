import { Schedule } from "../../utils/types/schedules";

export interface BasicScheduleProps {
  schedules: Schedule[];
  selectedSchedules: Schedule[];
  setSchedules: (schedules: Schedule[]) => void;
}


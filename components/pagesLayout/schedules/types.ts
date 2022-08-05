import { Schedule, ScheduleToEdit } from "../../../utils/types/schedules";

export interface BasicScheduleProps {
  schedules: Schedule[];
  selectedSchedules: Schedule[];
  setSchedules: (schedules: Schedule[]) => void;
}

export interface ScheduleIsItemsRendererProps extends BasicScheduleProps {
  setScheduleToEdit: (schedule: ScheduleToEdit) => void;
}

export type SchedulesEditorProps = Omit<
  BasicScheduleProps,
  "schedules selectedSchedules"
> & {
  scheduleToEdit: ScheduleToEdit;
  setTemplatesSchedules: (schedule: Schedule[]) => void;
  setSelectedSchedules: (schedules: Schedule[]) => void;
};

export interface Schedule {
  id: string;
  title: string;
  isTemplate: boolean,
  frequency: string;
  senderId?: string;
  start: moment.Moment;
  end: moment.Moment;
  customDates?: moment.Moment[];
}

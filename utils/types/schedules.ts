export interface Schedule {
  id: string;
  title: string;
  frequency: string;
  senderId?: string;
  start: moment.Moment;
  end: moment.Moment;
  customDates?: moment.Moment[];
}

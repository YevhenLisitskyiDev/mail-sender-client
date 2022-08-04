import moment from "moment";

export const mockSchedules = [
  {
    id: "1",
    title: "Weekly",
    isTemplate: true,
    frequency: "weekly",
    start: moment(),
    end: moment().add(1, "month").add(1, "hour"),
    customDates: [
      moment().add(1, "month"),
      moment().add(2, "days"),
      moment().add(10, "days"),
    ],
  },
  {
    id: "2",
    title: "Bi-weekly",
    isTemplate: true,
    frequency: "2*weekly",
    start: moment().add(-1, "month"),
    end: moment().add(2, "month"),
    customDates: [moment().add(21, "days")],
  },
  {
    id: "3",
    title: "Once in 2 days",
    isTemplate: true,
    frequency: "2*daily",
    start: moment().subtract(3, "month").add(2, "hour"),
    end: moment().add(1, "month").add(3, "hour"),
  },
];

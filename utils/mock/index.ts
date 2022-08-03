import moment from "moment";

export const mockSchedules = [
  {
    id: "1",
    title: "Weekly",
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
    frequency: "2*weekly",
    start: moment().subtract(1, "month").add(1, "hour"),
    end: moment(),
    customDates: [moment().add(20, "days")],
  },
  // {
  //   id: "3",
  //   title: "Once in 2 days",
  //   frequency: "2*daily",
  //   start: moment().subtract(3, "month").add(2, "hour"),
  //   end: moment().add(1, "month").add(3, "hour"),
  // },
];

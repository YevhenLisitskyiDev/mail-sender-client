import { Button, Grid } from "@mui/material";
import moment, { Moment } from "moment";
import { Dispatch, FC, SetStateAction } from "react";
import { CalendarComponentBasicProps } from ".";
import { Schedule } from "../../utils/types/schedules";

interface DateItemsRendererProps extends CalendarComponentBasicProps {
  activeDates?: Date[] | moment.Moment[];
  schedules?: Schedule[];
  dateItem: any;
}

const DateItemsRenderer: FC<DateItemsRendererProps> = ({
  currentDate,
  setCurrentDate,
  activeDates = [],
  schedules = [],
  dateItem,
}) => {
  const CURRENT_MONTH = moment(currentDate).format("M");
  const FIRST_DAY_OF_FIRST_WEEK = moment(currentDate)
    .startOf("month")
    .weekday(1);

  const WEEKS_IN_VIEW = 6;
  const DAYS_IN_WEEK = 7;

  return (
    <Grid container spacing={0.5} mt={1}>
      {Array.from({ length: WEEKS_IN_VIEW }, (_, i) => {
        return (
          <Grid key={i} container spacing={0.5}>
            {Array.from({ length: DAYS_IN_WEEK }, (_, j) => {
              const date = moment(FIRST_DAY_OF_FIRST_WEEK)
                .add(i, "weeks")
                .add(j, "days");

              const isActive = activeDates.some((activeDate) => {
                return moment(activeDate).isSame(date, "day");
              });

              const isCurrentMonth = CURRENT_MONTH === date.format("M");

              const isSameDay =
                date.format("D") === moment(currentDate).format("D");
              const isSameMonth =
                date.format("M") === moment(currentDate).format("M");
              const isSelected = isSameDay && isSameMonth;

              return (
                <Grid
                  mt={1}
                  key={j}
                  item
                  xs
                  sx={{ display: "flex", justifyContent: "center" }}>
                  {dateItem(date, isCurrentMonth, isSelected, isActive)}
                </Grid>
              );
            })}
          </Grid>
        );
      })}
    </Grid>
  );
};
export default DateItemsRenderer;

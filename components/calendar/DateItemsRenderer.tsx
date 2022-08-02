import { Button, Grid } from "@mui/material";
import moment from "moment";
import { Dispatch, FC, SetStateAction } from "react";

interface DateItemsRendererProps {
  selectedDate: Date | moment.Moment;
  setSelectedDate: Dispatch<SetStateAction<Date | moment.Moment>>;
  dateItem: any;
}

const DateItemsRenderer: FC<DateItemsRendererProps> = ({
  selectedDate,
  setSelectedDate,
  dateItem,
}) => {
  const CURRENT_MONTH = moment(selectedDate).format("M");
  const FIRST_DAY_OF_FIRST_WEEK = moment(selectedDate)
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
              const isActive = CURRENT_MONTH === date.format("M");
              return (
                <Grid
                  mt={1}
                  key={j}
                  item
                  xs
                  sx={{ display: "flex", justifyContent: "center" }}>
                  {dateItem(date, isActive)}
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

import { Box, Button, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import moment, { Moment } from "moment";

const DAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const Calendar: FC = () => {
  const [selectedDate, setSelectedDate] = useState<Moment | Date>(new Date());
  const PREV_MONTH = moment(selectedDate).subtract(1, "month");
  const CURRENT_MONTH = moment(selectedDate).format("M");
  const NEXT_MONTH = moment(selectedDate).add(1, "month");

  const FIRST_DAY_OF_FIRST_WEEK = moment(selectedDate)
    .startOf("month")
    .weekday(1);

  const WEEKS_IN_VIEW = 6;
  const DAYS_INWEEK = 7;
  const CURRENT_VIEW_DAYS = Array.from({ length: WEEKS_IN_VIEW }, (_, i) => {
    return (
      <Grid key={i} container spacing={0.5}>
        {Array.from({ length: DAYS_INWEEK }, (_, j) => {
          const date = moment(FIRST_DAY_OF_FIRST_WEEK)
            .add(i, "weeks")
            .add(j, "days");
          return (
            <Grid
              mt
              key={j}
              item
              xs
              sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant={
                  date.format("M") === CURRENT_MONTH ? "contained" : "outlined"
                }
                color="primary"
                onClick={() => setSelectedDate(date)}>
                {date.format("D")}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    );
  });

  return (
    <>
      <Grid container spacing={0.5}>
        <Grid item xs={2} sx={{ textAlign: "center" }}></Grid>
        <Grid
          item
          xs={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Button
            variant="outlined"
            onClick={() => {
              setSelectedDate(PREV_MONTH);
            }}>
            Prev month
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <Typography variant="h1">
            {moment(selectedDate).format("MMMM YYYY")}
          </Typography>
        </Grid>
        <Grid
          item
          xs={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Button
            variant="outlined"
            onClick={() => {
              setSelectedDate(NEXT_MONTH);
            }}>
            Next month
          </Button>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>

      <Grid container spacing={0.5}>
        {DAYS.map((day, index) => (
          <Grid item xs key={index} sx={{ textAlign: "center" }}>
            {day}
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={0.5} mt={1}>
        {CURRENT_VIEW_DAYS}
      </Grid>
      <Grid container spacing={0.5}></Grid>
    </>
  );
};

export default Calendar;

import { Box, Button, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import moment, { Moment } from "moment";
import DateItemsRenderer from "./DateItemsRenderer";

const DAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const Calendar: FC = () => {
  const [selectedDate, setSelectedDate] = useState<Moment | Date>(new Date());
  const NEXT_MONTH = moment(selectedDate).add(1, "month");
  const PREV_MONTH = moment(selectedDate).subtract(1, "month");

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

      <DateItemsRenderer
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        dateItem={(date: Moment, isActive: boolean) => (
          <Button
            variant={isActive ? "contained" : "outlined"}
            color="primary"
            onClick={() => setSelectedDate(date)}>
            {date?.format("D")}
          </Button>
        )}
      />
    </>
  );
};

export default Calendar;

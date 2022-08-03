import { Grid } from "@mui/material";
import { FC } from "react";
import { CalendarComponentBasicProps } from ".";

interface CalendarColumnsTitlesProps {}

const CalendarColumnTitles: FC<CalendarColumnsTitlesProps> = () => {
  const DAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  return (
    <Grid container spacing={0.5}>
      {DAYS.map((day, index) => (
        <Grid item xs key={index} sx={{ textAlign: "center" }}>
          {day}
        </Grid>
      ))}
    </Grid>
  );
};

export default CalendarColumnTitles;

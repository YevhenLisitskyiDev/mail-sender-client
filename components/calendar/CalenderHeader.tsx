import { Button, Grid, Typography } from "@mui/material";
import moment from "moment";
import { Moment } from "moment";
import { Dispatch, FC, SetStateAction } from "react";
import { CalendarComponentBasicProps } from ".";

interface CalendarHeaderProps extends CalendarComponentBasicProps {
}

const CalendarHeader: FC<CalendarHeaderProps> = ({
  currentDate,
  setCurrentDate,
}) => {
  const NEXT_MONTH = moment(currentDate).add(1, "month");
  const PREV_MONTH = moment(currentDate).subtract(1, "month");

  return (
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
            setCurrentDate(PREV_MONTH);
          }}>
          Prev month
        </Button>
      </Grid>
      <Grid item xs={6} sx={{ textAlign: "center" }}>
        <Typography variant="h1">
          {moment(currentDate).format("MMMM YYYY")}
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
            setCurrentDate(NEXT_MONTH);
          }}>
          Next month
        </Button>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default CalendarHeader;

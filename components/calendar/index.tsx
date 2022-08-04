import { Box, Button, Grid, Typography } from "@mui/material";
import { Dispatch, FC, SetStateAction, useState } from "react";
import moment, { Moment } from "moment";
import DateItemsRenderer from "./DateItemsRenderer";
import { mockSchedules } from "../../utils/mock";
import { Schedule } from "../../utils/types/schedules";
import CalendarHeader from "./CalenderHeader";
import CalendarColumnTitles from "./CaendarColumnTitles";
import { getDatesFromSchedules } from "./helpers";

export interface CalendarComponentBasicProps {
  currentDate: Date | moment.Moment;
  setCurrentDate: Dispatch<SetStateAction<Date | moment.Moment>>;
}

interface CalendarProps {
  initialDate?: Date | moment.Moment;
  schedules?: Schedule[];
  onDateItemClick?: (date: Date | moment.Moment) => void;
  dateItem?: (date: Date | moment.Moment) => JSX.Element;
}

const Calendar: FC<CalendarProps> = ({
  initialDate = new Date(),
  schedules = [],
}) => {
  const [currentDate, setCurrentDate] = useState<Moment | Date>(initialDate);

  const activeDates = getDatesFromSchedules(schedules as Schedule[]);

  const [editMode, setEditMode] = useState(false);

  const handleDateClick = (date: Moment | Date) => {
    setCurrentDate(date);
  };

  return (
    <>
      <CalendarHeader
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
      <CalendarColumnTitles />
      <DateItemsRenderer
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        activeDates={activeDates}
        dateItem={(
          date: Moment,
          isCurrentMonth: boolean,
          isSelected: boolean,
          isActive: boolean
        ) => (
          <Button
            variant={
              isSelected ? "contained" : isCurrentMonth ? "outlined" : "text"
            }
            color={isSelected || isActive ? "primary" : "secondary"}
            onClick={() => handleDateClick(date)}>
            {date?.format("D")}
          </Button>
        )}
      />
    </>
  );
};

export default Calendar;

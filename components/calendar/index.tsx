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

const Calendar: FC = () => {
  const [currentDate, setCurrentDate] = useState<Moment | Date>(new Date());
  const [schedules, setSchedules] = useState<Schedule[]>(mockSchedules);
  const [selectedSchedule, setSelectedSchedule] =
    useState<Schedule[]>(mockSchedules);
  const activeDates = getDatesFromSchedules(selectedSchedule);

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

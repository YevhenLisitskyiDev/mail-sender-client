import { Box, Button, IconButton } from "@mui/material";
import { FC } from "react";
import { BasicScheduleProps, ScheduleIsItemsRendererProps } from "./types";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { getMultiplierAndFrequency } from "../../Calendar/helpers";

const ScheduleIstemsRenderer: FC<ScheduleIsItemsRendererProps> = ({
  schedules = [],
  selectedSchedules,
  setScheduleToEdit,
  setSchedules,
}) => {
  return (
    <>
      {schedules.length
        ? schedules.map((schedule, index) => {
            const isSelected = selectedSchedules.includes(schedule);
            return (
              <Box
                key={index}
                onClick={() => {
                  setSchedules([schedule]);
                }}
                border={isSelected ? 1 : 0}
                borderColor="secondary"
                sx={{
                  cursor: "pointer",
                }}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <Box sx={{ flex: 1 }}>{schedule.title}</Box>
                  <Box>
                    <IconButton
                      color="warning"
                      onClick={() => {
                        const [frequencyModifier, frequency] =
                          getMultiplierAndFrequency(schedule.frequency);
                        const scheduleToEdit = {
                          ...schedule,
                          frequencyModifier,
                          frequency,
                        };
                        console.log(scheduleToEdit);
                        setScheduleToEdit(scheduleToEdit);
                      }}>
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => {
                        // setSelectedSchedules([schedule]);
                      }}>
                      <DeleteForeverIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            );
          })
        : "No schedules yet"}
    </>
  );
};

export default ScheduleIstemsRenderer;

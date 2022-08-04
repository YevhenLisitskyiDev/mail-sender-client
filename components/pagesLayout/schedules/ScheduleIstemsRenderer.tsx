import { Box, Button } from "@mui/material";
import { FC } from "react";
import { BasicScheduleProps } from "../types";

export const ScheduleIstemsRenderer: FC<BasicScheduleProps> = ({
  schedules = [],
  selectedSchedules,
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
                    <Button
                      variant="outlined"
                      color="warning"
                      onClick={() => {
                        // setSelectedSchedules([schedule]);
                      }}>
                      Delete
                    </Button>
                  </Box>
                </Box>
              </Box>
            );
          })
        : "No schedules yet"}
    </>
  );
};

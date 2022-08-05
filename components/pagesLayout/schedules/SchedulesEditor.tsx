import {
  FormControl,
  InputLabel,
  NativeSelect,
  Select,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import { FC, SyntheticEvent, useEffect, useState } from "react";
import { getMultiplierAndFrequency } from "../../Calendar/helpers";
import { SchedulesEditorProps } from "./types";

function valuetext(value: number) {
  return `${value}`;
}

const ScheduleEditor: FC<SchedulesEditorProps> = ({
  scheduleToEdit,
  setSchedules,
  setTemplatesSchedules,
  setSelectedSchedules,
}) => {
  const [formValues, setFormValues] = useState({
    id: `${Date.now()}`,
    title: "Your new schedule",
    isTemplate: false,
    frequencyModifier: 1,
    frequency: "weekly",
    start: moment(),
    end: moment().add(1, "month").add(1, "hour"),
    customDates: [],
  });
  console.log(formValues);
  useEffect(() => {
    if (scheduleToEdit) {
      setSelectedSchedules([
        {
          ...formValues,
          frequency: `${formValues.frequencyModifier}*${formValues?.frequency}`,
        },
      ]);
    }
  }, [formValues]);

  useEffect(() => {
    if (scheduleToEdit) {
      setFormValues(scheduleToEdit);
    }
  }, [scheduleToEdit]);

  const handleInputChange = (e: SyntheticEvent) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <>
      {scheduleToEdit ? (
        <Box sx={{ background: "#fff", color: "#000" }}>
          <form>
            <Stack direction={"row"}>
              <Box m={1} width={200}>
                <Typography variant="h6">Frequency modifier: </Typography>
                <Slider
                  aria-label="frequencyModifier"
                  defaultValue={30}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  value={formValues.frequencyModifier}
                  onChange={(e, value) => {
                    if (value !== formValues.frequencyModifier) {
                      setFormValues({
                        ...formValues,
                        frequencyModifier: value as number,
                      });
                    }
                  }}
                  step={1}
                  marks
                  min={1}
                  max={20}
                />
              </Box>
              <FormControl sx={{ marginLeft: "20px" }}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Frequency
                </InputLabel>
                <NativeSelect
                  defaultValue={
                    scheduleToEdit ? scheduleToEdit.frequency : "weekly"
                  }
                  value={formValues?.frequency}
                  onChange={handleInputChange}
                  inputProps={{
                    name: "frequency",
                    id: "uncontrolled-native",
                  }}>
                  <option value={"daily"}>Daily</option>
                  <option value={"weekly"}>Weekly</option>
                  <option value={"monthly"}>Monthly</option>
                  <option value={"yearly"}>Yearly</option>
                </NativeSelect>
              </FormControl>
            </Stack>
          </form>
        </Box>
      ) : (
        "Select a schedule to edit or create a new one"
      )}
    </>
  );
};

export default ScheduleEditor;

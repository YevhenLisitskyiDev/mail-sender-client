import { Box, Button, Typography } from "@mui/material";
import moment from "moment";
import { FC, useState } from "react";
import Accordion from "../../components/Accordion/Accordion";
import Calendar from "../../components/Calendar";
import EditorAndSidebar from "../../components/layout/Editor+Sidebar";
import ScheduleIstemsRenderer from "../../components/pagesLayout/schedules/ScheduleIsItemsRenderer";
import ScheduleEditor from "../../components/pagesLayout/schedules/SchedulesEditor";
import Tabs from "../../components/Tabs";
import { mockSchedules } from "../../utils/mock";
import { Schedule, ScheduleToEdit } from "../../utils/types/schedules";

const Schedule: FC = () => {
  const [schedulesTemplates, setSchedulesTemplates] =
    useState<Schedule[]>(mockSchedules);
  const [userSchedules, setUserSchedules] = useState<Schedule[]>([]);
  const [selectedSchedules, setSelectedSchedules] = useState<Schedule[]>([]);
  const [scheduleToEdit, setScheduleToEdit] = useState<ScheduleToEdit | null>();

  const editorContent = (
    <>
      <Calendar schedules={selectedSchedules} />
      <ScheduleEditor
        selectedSchedules={selectedSchedules}
        setSelectedSchedules={setSelectedSchedules}
        scheduleToEdit={scheduleToEdit as ScheduleToEdit}
      />
    </>
  );

  const schedulesTabAccordionContent = [
    {
      title: "Default templates",
      content: (
        <>
          <ScheduleIstemsRenderer
            selectedSchedules={selectedSchedules}
            schedules={schedulesTemplates}
            setSchedules={setSelectedSchedules}
            setScheduleToEdit={setScheduleToEdit}
          />
        </>
      ),
    },
    {
      title: "Your Schedules",
      content: (
        <ScheduleIstemsRenderer
          selectedSchedules={selectedSchedules}
          schedules={userSchedules}
          setSchedules={setUserSchedules}
        />
      ),
    },
  ];

  const schedulesTabsContent = (
    <>
      <Accordion isSimple accordionsData={schedulesTabAccordionContent} />
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          bottom: 30,
          left: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setScheduleToEdit({
              id: `${Date.now()}`,
              title: "Your new schedule",
              isTemplate: false,
              frequencyModifier: 1,
              frequency: "weekly",
              start: moment(),
              end: moment().add(1, "month").add(1, "hour"),
              customDates: [],
            });
          }}>
          Create template
        </Button>
      </Box>
    </>
  );

  const sidebarTabsData = [
    { tabName: "Senders", tabContent: <div>Senders</div> },
    { tabName: "Schedules", tabContent: schedulesTabsContent },
  ];

  return (
    <EditorAndSidebar
      editorContent={editorContent}
      sidebarContent={<Tabs tabsData={sidebarTabsData} />}
    />
  );
};

export default Schedule;

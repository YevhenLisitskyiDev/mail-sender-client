import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { FC, useState } from "react";
import Accordion from "../../components/Accordion/Accordion";
import Calendar from "../../components/Calendar";
import EditorAndSidebar from "../../components/layout/Editor+Sidebar";
import { ScheduleIstemsRenderer } from "../../components/pagesLayout/schedules/ScheduleIstemsRenderer";
import MUITabs from "../../components/Tabs";
import { mockSchedules } from "../../utils/mock";
import { Schedule } from "../../utils/types/schedules";

const Schedule: FC = () => {
  const [schedulesTemplates, setSchedulesTemplates] =
    useState<Schedule[]>(mockSchedules);
  const [userSchedules, setUserSchedules] = useState<Schedule[]>([]);
  const [selectedSchedules, setSelectedSchedules] = useState<Schedule[]>([]);
  const [value, setValue] = useState(0);

  const editorContent = <Calendar schedules={selectedSchedules} />;

  const schedulesTabAccordionContent = [
    {
      title: "Default templates",
      content: (
        <>
          <ScheduleIstemsRenderer
            selectedSchedules={selectedSchedules}
            schedules={schedulesTemplates}
            setSchedules={setSelectedSchedules}
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
            // setSelectedSchedules([schedule]);
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
      sidebarContent={<MUITabs tabsData={sidebarTabsData} />}
    />
  );
};

export default Schedule;

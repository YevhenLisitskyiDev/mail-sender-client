// Tabs react component that takes an array of {tabName, tabContent} and renders them as MaterialUI tabs
import { FC, useState } from "react";
import { Box, Button, Tab, Tabs as MUITabs, Typography } from "@mui/material";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Tabs: FC<{
  tabsData: {
    tabName: string;
    tabContent: JSX.Element;
  }[];
}> = ({ tabsData }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabs: string[] = [];
  const tabsContent: JSX.Element[] = [];

  tabsData.forEach((tab, index) => {
    tabs.push(tab.tabName);
    tabsContent.push(tab.tabContent);
  });

  return (
    <Box sx={{ height: "calc(100% - 50px)", color: "#fff" }}>
      <MUITabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        aria-label="basic tabs example"
        indicatorColor="secondary"
        textColor="inherit">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            color="secondary"
            label={tab}
            {...a11yProps(index)}
          />
        ))}
      </MUITabs>
      {tabsContent.map((tabContent, index) => (
        <div
          key={index}
          role="tabpanel"
          style={{ position: "relative", height: "100%" }}
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}>
          {tabContent}
        </div>
      ))}
    </Box>
  );
};
export default Tabs;

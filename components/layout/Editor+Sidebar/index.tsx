import { Grid } from "@mui/material";
import { FC } from "react";
import Editor from "./Editor";
import Sidebar from "./Sidebar";

const EditorAndSidebar: FC<{
  editorContent: () => JSX.Element;
  sidebarContent: () => JSX.Element;
}> = ({ editorContent, sidebarContent }) => {
  return (
    <Grid container spacing={2} sx={{ height: "calc(100vh - 50px)" }}>
      <Editor>{editorContent()}</Editor>
      <Sidebar>{sidebarContent()}</Sidebar>
    </Grid>
  );
};
export default EditorAndSidebar;

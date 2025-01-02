import { Box } from "@mui/material";
import TodayComponent from "./TodayComponent";
import WorkedCount from "./WorkedCount";
import Projects from "./Projects";
import Members from "./Members";

const Main = () => (
  <>
    <Box component="main" sx={{ p: 6, backgroundColor: "#F9F9F9" }}>
      <TodayComponent />
      <WorkedCount />
      <Projects />
      <Members />
    </Box>
  </>
);

export default Main;

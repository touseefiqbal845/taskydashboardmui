import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import TodayComponent from "./TodayComponent";
import WorkedCount from "./WorkedCount";
import Projects from "./Projects";
import Members from "./Members";

const Main = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = Cookies.get('jwt');
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:5001/api/auth/users/dashboard', { withCredentials: true });
        setIsAuthenticated(response.data.authenticated);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <p>Loading...</p>;
  }

  // if (!isAuthenticated) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <Box component="main" sx={{ p: 6, backgroundColor: "#F9F9F9" }}>
      <TodayComponent />
      <WorkedCount />
      <Projects />
      <Members />
    </Box>
  );
};

export default Main;

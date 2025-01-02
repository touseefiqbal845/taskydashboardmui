import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MiniDrawer from "./Layout/DashboardLayout";
import Main from "./Pages/Dashboard/Dashboard";

const App = () => {
  return (
    <Router>
      <MiniDrawer>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </MiniDrawer>
    </Router>
  );
};

export default App;

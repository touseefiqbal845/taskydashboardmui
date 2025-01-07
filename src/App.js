import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MiniDrawer from "./Layout/DashboardLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Register from "./Pages/Authentications/Register";
import Login from "./Pages/Authentications/Login";
import ForgotPassword from "./Pages/Authentications/Forgotpassword";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<MiniDrawer><Dashboard /></MiniDrawer>} /> */}
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;

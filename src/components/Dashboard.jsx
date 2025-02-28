import React from "react";

import Sidebar from "./sidebar/sidebar.jsx";
import Stepper from "./stepper/stepper.jsx";

// import StepForm from "./StepForm/StepForm.jsx";

const Dashboard = () => (
  <div style={{ display: "flex", backgroundColor: "rgb(227,227,227)" }}>
    <Sidebar />
    <Stepper />
    {/* <Sidebar />
    <StepForm /> */}
  </div>
);

export default Dashboard;

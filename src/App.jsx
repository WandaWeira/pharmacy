import React from "react";
import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;

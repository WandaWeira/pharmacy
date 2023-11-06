import React from "react";
import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";

const App = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <TopBar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;

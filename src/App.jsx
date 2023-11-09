import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar/SideBar";
import TopBar from "./components/TopBar";

const App = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <TopBar />
        <div className="m-8 text-gray-800">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;

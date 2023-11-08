import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar/SideBar";
import TopBar from "./components/TopBar";
import Inventory from "./components/Inventory";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <SideBar />
        <div className="flex-1">
          <TopBar />
          <div className="m-8 text-gray-800">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/inventory" element={<Inventory />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

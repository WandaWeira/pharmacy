import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Inventory from "./components/Inventory";
import Reports from "./components/Reports";
import MedicineList from "./components/MedicineList";
import MedicineGroups from "./components/MedicineGroups";

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
              <Route path="/medicineList" element={<MedicineList />} />
              <Route path="/medicineGroups" element={<MedicineGroups />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

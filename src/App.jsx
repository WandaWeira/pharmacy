import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Inventory from './components/Inventory';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <SideBar />
        <div className="flex-1">
          <TopBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Inventory from "./components/Inventory";
import Reports from "./components/Reports";
import MedicineList from "./components/MedicineList";
import MedicineGroups from "./components/MedicineGroups";
import Dashboard from "./components/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Dashboard />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/medicineList" element={<MedicineList />} />
      <Route path="/medicineGroups" element={<MedicineGroups />} />
      <Route path="/reports" element={<Reports />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

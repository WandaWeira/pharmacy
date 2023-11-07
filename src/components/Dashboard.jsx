import { MdArrowDropDown } from "react-icons/md";
import CardSmall from "./CardSmall";
import CardLarge from "./CardLarge";

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <h3>A quick data overview of the inventory</h3>
        </div>
        <button className="flex justify-between items-center rounded p-2 border-2">
          <h3>Download report</h3>
          <MdArrowDropDown className="w-5" />
        </button>
      </div>
      <CardSmall />
      <CardLarge />
    </>
  );
};

export default Dashboard;

import CardSmall from "./CardSmall";
import { MdAdd } from "react-icons/md";

const Inventory = () => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold">Inventory</h2>
          <h3>List of medicines available for sale</h3>
        </div>
        <button className="flex justify-between items-center rounded hover:bg-red-600  p-2 text-white bg-red-500 ">
          <MdAdd className="w-5" />
          Add New Item
        </button>
      </div>
      <CardSmall />
    </>
  );
};

export default Inventory;

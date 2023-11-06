import { MdLocalHospital, MdOutlineArrowForwardIos, MdMoney, MdMedication, MdDangerous } from "react-icons/md";

const CardSmall = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="my-8 border-2 border-green-500 w-48 h-32 rounded text-center flex flex-col justify-between">
        <div className="items-center">
          <div className="flex items-center justify-center">
            <MdLocalHospital size="30" color="green" />
          </div>
          <h2 className="font-bold text-xl">Good</h2>
          <h3 className="text-sm">Inventory Status</h3>
        </div>
        <div className="flex items-center justify-center bg-green-500 p-1">
          <h3 className="text-xs">View Detailed Report</h3>
          <div className="flex ml-4">
            <MdOutlineArrowForwardIos size="8" />
            <MdOutlineArrowForwardIos size="8" />
          </div>
        </div>
      </div>
      <div className="my-8 border-2 border-yellow-300 w-48 h-32 rounded text-center flex flex-col justify-between">
        <div className="items-center">
          <div className="flex items-center justify-center">
            <MdMoney size="30" color="yellow" />
          </div>
          <h2 className="font-bold text-xl">UGX. 8,000,000</h2>
          <h3 className="text-sm">Revenue: Jan 2022</h3>
        </div>
        <div className="flex items-center justify-center bg-yellow-300 p-1">
          <h3 className="text-xs">View Detailed Report</h3>
          <div className="flex ml-4">
            <MdOutlineArrowForwardIos size="8" />
            <MdOutlineArrowForwardIos size="8" />
          </div>
        </div>
      </div>
      <div className="my-8 border-2 border-blue-500 w-48 h-32 rounded text-center flex flex-col justify-between">
        <div className="items-center">
          <div className="flex items-center justify-center">
            <MdMedication size="30" color="blue" />
          </div>
          <h2 className="font-bold text-xl">298</h2>
          <h3 className="text-sm">Medicines Available</h3>
        </div>
        <div className="flex items-center justify-center bg-blue-500 p-1">
          <h3 className="text-xs">Visit Inventory</h3>
          <div className="flex ml-4">
            <MdOutlineArrowForwardIos size="8" />
            <MdOutlineArrowForwardIos size="8" />
          </div>
        </div>
      </div>
      <div className="my-8 border-2 border-red-500 w-48 h-32 rounded text-center flex flex-col justify-between">
        <div className="items-center">
          <div className="flex items-center justify-center">
            <MdDangerous size="30" color="red" />
          </div>
          <h2 className="font-bold text-xl">01</h2>
          <h3 className="text-sm">Medicine Shortage</h3>
        </div>
        <div className="flex items-center justify-center bg-red-500 p-1">
          <h3 className="text-xs">Resolve Now</h3>
          <div className="flex ml-4">
            <MdOutlineArrowForwardIos size="8" />
            <MdOutlineArrowForwardIos size="8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSmall;

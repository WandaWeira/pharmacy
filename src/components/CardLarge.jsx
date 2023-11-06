import { MdOutlineArrowForwardIos } from "react-icons/md";

const CardLarge = () => {
  return (
    <>
      <div className="flex gap-10 my-10">
        <div className="w-2/4 rounded border-2 border-gray-300 p-4">
          <div className="flex justify-between border-b-2 border-gray-300">
            <h2>Inventory</h2>
            <div className="flex items-center">
              <h3>Go to Configuration</h3>
              <div className="flex ml-4">
                <MdOutlineArrowForwardIos size="8" />
                <MdOutlineArrowForwardIos size="8" />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <h2 className="font-bold text-lg">298</h2>
              <h3 className="font-semibold">Total no of Medicines</h3>
            </div>
            <div>
              <h2 className="font-bold text-lg">24</h2>
              <h3 className="font-semibold">Medicine Groups</h3>
            </div>
          </div>
        </div>
        <div className="w-2/4 rounded border-2 border-gray-300 p-4">
          <div className="flex justify-between border-b-2 border-gray-300">
            <h2>Quick Report</h2>
            <div className="flex items-center">
              <h3>Jan 2022</h3>
              <div className="flex ml-4">
                <MdOutlineArrowForwardIos size="8" />
                <MdOutlineArrowForwardIos size="8" />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <h2 className="font-bold text-lg">70,856</h2>
              <h3 className="font-semibold">Qty of Medicines sold</h3>
            </div>
            <div>
              <h2 className="font-bold text-lg">5,288</h2>
              <h3 className="font-semibold">Invoices Generated</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 my-10">
      <div className="w-2/4 rounded border-2 border-gray-300 p-4">
          <div className="flex justify-between border-b-2 border-gray-300">
            <h2>My Pharmacy</h2>
            <div className="flex items-center">
              <h3>Go to User management</h3>
              <div className="flex ml-4">
                <MdOutlineArrowForwardIos size="8" />
                <MdOutlineArrowForwardIos size="8" />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <h2 className="font-bold text-lg">04</h2>
              <h3 className="font-semibold">Total no of Suppliers</h3>
            </div>
            <div>
              <h2 className="font-bold text-lg">05</h2>
              <h3 className="font-semibold">Total no of Users</h3>
            </div>
          </div>
        </div>
        <div className="w-2/4 rounded border-2 border-gray-300 p-4">
          <div className="flex justify-between border-b-2 border-gray-300">
            <h2>Customer</h2>
            <div className="flex items-center">
              <h3>Go to Customer page</h3>
              <div className="flex ml-4">
                <MdOutlineArrowForwardIos size="8" />
                <MdOutlineArrowForwardIos size="8" />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <h2 className="font-bold text-lg">845</h2>
              <h3 className="font-semibold">Total no of Customers</h3>
            </div>
            <div>
              <h2 className="font-bold text-lg">Weira</h2>
              <h3 className="font-semibold">Frequently bought items</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardLarge;

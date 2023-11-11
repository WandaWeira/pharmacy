import React from "react";
import { FiChevronsRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Table = ({ data }) => {
  return (
    <div className="relative overflow-x-auto font-poppins font-normal border my-6 rounded-lg   border-b border-gray-300">
      <table className="w-full text-sm font-normal  text-left rtl:text-right">
        <thead className="border-b border-gray-300">
          <tr>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Medicine Name
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Medicine ID
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Group Name
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Stock in Qty
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className=" border-b ">
              <td scope="row" className="px-6 py-4">
                {item.medicineName}
              </td>
              <td className="px-6 py-4 ">{item.medicineID}</td>
              <td className="px-6 py-4 ">{item.groupName}</td>
              <td className="px-6 py-4 ">{item.stockInQty}</td>
              <td className="px-2 py-4  text-left ">
                <Link
                  to={{
                    pathname: `/detail/${item.medicineID}`,
                    state: { medicine: item },
                  }}
                  className="font-medium flex items-center hover:underline"
                >
                  View Full Details <FiChevronsRight />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

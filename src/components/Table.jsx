import React from "react";
import { FiChevronsRight } from "react-icons/fi";

const Table = () => {
  const data = [
    {
      medicineName: "Aspirin",
      medicineID: "12345",
      groupName: "Pain Relievers",
      stockInQty: 100,
    },
    {
      medicineName: "Ibuprofen",
      medicineID: "54321",
      groupName: "Pain Relievers",
      stockInQty: 75,
    },
    {
      medicineName: "Amoxicillin",
      medicineID: "98765",
      groupName: "Antibiotics",
      stockInQty: 50,
    },
    {
      medicineName: "Lisinopril",
      medicineID: "24680",
      groupName: "Hypertension Medications",
      stockInQty: 60,
    },
    {
      medicineName: "Levothyroxine",
      medicineID: "13579",
      groupName: "Thyroid Medications",
      stockInQty: 40,
    },
    {
      medicineName: "Simvastatin",
      medicineID: "11223",
      groupName: "Cholesterol Medications",
      stockInQty: 30,
    },
    {
      medicineName: "Omeprazole",
      medicineID: "55443",
      groupName: "Gastrointestinal Medications",
      stockInQty: 45,
    },
    {
      medicineName: "Metformin",
      medicineID: "98765",
      groupName: "Diabetes Medications",
      stockInQty: 55,
    },
  ];

  return (
    <div className="relative overflow-x-auto font-poppins font-normal border my-6 rounded-lg   border-b border-gray-300">
      <table className="w-full text-sm font-normal">
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
              <td scope="row" className="px-6 py-4  ">
                {item.medicineName}
              </td>
              <td className="px-6 py-4 ">{item.medicineID}</td>
              <td className="px-6 py-4 ">{item.groupName}</td>
              <td className="px-6 py-4 ">{item.stockInQty}</td>
              <td className="px-6 py-4  text-right">
                <a
                  href="#"
                  className="font-medium flex items-center gap-2.5 hover:underline"
                >
                  <span>View Full Detail</span> <FiChevronsRight />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

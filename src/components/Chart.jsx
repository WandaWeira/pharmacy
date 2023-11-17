// import { CurrencyDollarIcon } from '@heroicons/react/outline'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Most bought product",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(0, 217, 84,0.2)",
      borderColor: "rgba(0, 217, 84,1)",
    },
    {
      label: "Least bought product",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#FF0000",
    },
  ],
};

const Chart = () => {
  return <Line data={data} />;
};

export default Chart;

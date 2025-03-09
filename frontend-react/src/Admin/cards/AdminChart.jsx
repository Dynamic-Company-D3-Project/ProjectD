import React from "react";
import { Line } from "react-chartjs-2";
import axios from 'axios';
import config  from "../../config";
import { useState,useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Card } from "react-bootstrap";

// Register the necessary scales
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// const data = {
//   labels: [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ],
//   datasets: [
//     {
//       label: "Orders per Day",
//       data: [12, 19, 3, 5, 2, 3, 9],
//       fill: false,
//       backgroundColor: "rgb(75, 192, 192)",
//       borderColor: "rgba(75, 192, 192, 1)",
//     },
//   ],
// };

// const options = {
//   scales: {
//     y: {
//       beginAtZero: true,
//     },
//   },
// };

// const AdminChart = () => {
//   return (
//     <Card style={{ opacity: "0.7" }}>
//       <Card.Body>
//         <Card.Title className="fw-bold">Orders per Day</Card.Title>
//         <Line data={data} options={options} />
//       </Card.Body>
//     </Card>
//   );
// };

// export default AdminChart;

const AdminChart = () => {
  const [chartData, setChartData] = useState({
    labels: [], // Dates for the X-axis
    datasets: [
      {
        label: "Orders per Day",
        data: [], // Total orders for the Y-axis
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.dotNetApi}admin/Dashboard/orders/last-seven-days`); 
        const data = response.data;
          console.log(data)
        // Transform data into chart-friendly format
        const labels = data.map(item => item.date.split('T')[0]);
        console.log(labels)
        const ordersData = data.map(item => item.totalOrders);
        console.log(ordersData)

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Orders per Day",
              data: ordersData,
              fill: false,
              backgroundColor: "rgb(75, 192, 192)",
              borderColor: "rgba(75, 192, 192, 1)",
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on component mount

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Card style={{ opacity: "0.7" }}>
      <Card.Body>
        <Card.Title className="fw-bold">Orders per Day</Card.Title>
        <Line data={chartData} options={options} />
      </Card.Body>
    </Card>
  );
};

export default AdminChart;
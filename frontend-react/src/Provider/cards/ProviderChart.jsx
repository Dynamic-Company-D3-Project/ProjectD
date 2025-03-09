import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import config from "../config";
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
import { toast } from "react-toastify";

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

// function getWeekDates() {
//   let curr = new Date();
//   let week = [];

//   for (let i = 1; i <= 7; i++) {
//     let first = curr.getDate() - curr.getDay() + i;
//     let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
//     week.push(day);
//   }
//   return week;
// }

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const ProviderChart = () => {
  const token = sessionStorage.getItem("token");
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Orders per Day",
        data: [0, 0, 0, 0],
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  });
  useEffect(() => {
    loadOrders();
  }, []);
  const loadOrders = async function () {
    axios
      .get(`${config.url}/provider/chart`, {
        headers: {
          token,
        },
      })
      .then((response) => {
        const weekData = response["data"]["data"]
          .map((o) => {
            return o["order_date"];
          })
          .splice(-7);
        const orderData = response["data"]["data"]
          .map((o) => {
            return o["count(*)"];
          })
          .splice(-7);
        setData({
          labels: weekData,
          datasets: [
            {
              label: "Orders per Day",
              data: orderData,
              fill: false,
              backgroundColor: "rgb(75, 192, 192)",
              borderColor: "rgba(75, 192, 192, 1)",
            },
          ],
        });
      })
      .catch((error) => {});
  };
  return (
    <Card style={{ opacity: "0.7" }}>
      <Card.Body>
        <Card.Title className="fw-bold">Orders per Day</Card.Title>
        <Line data={data} options={options} />
      </Card.Body>
    </Card>
  );
};

export default ProviderChart;

import React from "react";
import { Line } from "react-chartjs-2";
import { getOrdersById } from "../services/provider";
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

function getWeekDates() {
  let curr = new Date();
  let week = [];

  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i;
    let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
    week.push(day);
  }
  return week;
}

const loadOrders = async function () {
  const result = await getOrdersById();
  if (result["status"] === "error") {
  } else {
    const orders = result["data"];
    const week = getWeekDates();
  }
};

const data = {
  labels: getWeekDates(),
  datasets: [
    {
      label: "Orders per Day",
      fill: false,
      backgroundColor: "rgb(75, 192, 192)",
      borderColor: "rgba(75, 192, 192, 1)",
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const ProviderChart = () => {
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

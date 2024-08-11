// import React from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Card } from "react-bootstrap";

// // Register the necessary scales
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

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

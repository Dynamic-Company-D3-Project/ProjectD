import axios from "axios";
import { cancelOrderById } from "../services/provider";
import { toast } from "react-toastify";
import config from "../config";

export function AllOrders({ id, name, address, date, revenue, status }) {
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id}
      </th>
      <td>{name}</td>
      <td>{address}</td>
      <td>{date}</td>
      <td>{revenue}</td>
      <td>{status}</td>
    </tr>
  );
}

export function PendingOrders({
  loadOrders,
  id,
  name,
  address,
  date,
  time,
  revenue,
}) {
  async function onCancel() {
    const result = await cancelOrderById({ id });
    if (result["status"] === "error") toast.error("Cannot Cancel Order");
    else {
      toast.success(`Order ${id} cancelled successfully`);
      loadOrders();
    }
  }
  const token = sessionStorage.getItem("token");
  async function onAccept() {
    axios
      .put(`${config.url}/provider/accept`, null, {
        params: { id },
        headers: { token },
      })
      .then((response) => {
        toast.success(`Order ${id} Ongoing `);
        loadOrders();
      })
      .catch((error) => {
        toast.error("Can't Accept the Order");
      });
  }
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id}
      </th>
      <td>{name}</td>
      <td>{address}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>{revenue}</td>
      <td>
        {" "}
        <button
          type="button"
          className="focus:outline-none btn btn-success"
          style={{ backgroundColor: "blue" }}
          onClick={onAccept}
        >
          Accept
        </button>
      </td>
      <td>
        {" "}
        <button
          type="button"
          className="focus:outline-none btn btn-danger"
          style={{ backgroundColor: "red" }}
          onClick={onCancel}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
}

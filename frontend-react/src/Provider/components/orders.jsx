import { cancelOrderById } from "../services/provider";
import { toast } from "react-toastify";

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

export function PendingOrders({ id, name, address, date, time, revenue }) {
  async function onCancel() {
    const result = await cancelOrderById({ id });
    if (result["status"] === "error") toast.error("Cannot Cancel Order");
    else {
      toast.success(`Order ${id} cancelled successfully`);
    }
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
          className="focus:outline-none text-white btn-danger"
          onClick={onCancel}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
}

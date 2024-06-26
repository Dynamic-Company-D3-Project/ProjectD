import { useNavigate } from "react-router-dom";

export default function Payment() {
  const isPaymentSuccess = false;
  const navigate = useNavigate();
  const onPayment = () => {
    navigate("/paynow");
  };
  return (
    <div class="lex h-screen justify-center items-center my-9 ">
      <center>
        <div class="rounded-md shadow-lg w-fit p-9 border-solid border-2 border-grey-600">
          <h1 class="text-2xl">Select Service Schedule</h1>

          <table>
            <tr>
              <td class="align-middle">Booking Date</td>
              <td>
                <input
                  class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                />
              </td>
            </tr>
            <tr>
              <td>Booking Time</td>
              <td>
                <input
                  class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="time"
                />
              </td>
            </tr>
            <tr>
              <td>Price</td>
              <td>
                <input
                  class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Service Details</td>
              <td>
                <input
                  class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                />
              </td>
            </tr>
          </table>

          <div class="flex-row-reverse space-x-8">
            <button
              onClick={onPayment}
              class=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Make Payment
            </button>
            <button
              class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </center>
    </div>
  );
}

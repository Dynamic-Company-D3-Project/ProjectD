export default function PayNow(params) {
  var isPaymentSuccess = false;
  const onPaySuccess = () => {
    isPaymentSuccess = true;
  };
  return (
    <div class="lex h-screen justify-center items-center my-9">
      <center>
        <div class="shadow-lg w-fit p-9">
          <h1 class="text-2xl">Order Details</h1>
          <br />
          <div>
            <div class="flex justify-between">
              <td>Services Total</td>
              <td>$600</td>
            </div>
            <div class="flex justify-between">
              <td>Platform Fee</td>
              <td>$20</td>
            </div>
            <div class="flex justify-between">
              <td>GST</td>
              <td>$62</td>
            </div>
            <div class="flex justify-between">
              <td>Coupon Discount</td>
              <td>$0</td>
            </div>
            <br />
            <hr />
            <br />
            <div class="flex justify-between">
              <td>Total Payable</td>
              <td>$682</td>
            </div>
          </div>

          <br />
          <hr />
          <br />
          {/* <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}
          <div class="relative">
            <input
              type="search"
              id="search"
              class=" p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Coupon Code"
              required
            />
            <button
              type="submit"
              class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Apply
            </button>
          </div>
          <br />
          {isPaymentSuccess ? (
            <div class="flex-row-reverse space-x-8">
              <p>Success</p>
            </div>
          ) : (
            <div class="flex-row-reverse space-x-8">
              <button
                onClick={onPaySuccess}
                class=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Make Payment
              </button>
              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </center>
    </div>
  );
}

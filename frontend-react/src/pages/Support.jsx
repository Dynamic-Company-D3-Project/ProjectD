import Footer from "../components/Footer";
import NavBarUser from "../components/NavBarUser";

export default function Support() {
  return (
    <div className="page-container">
      <NavBarUser />
      <div className="content-container">
        <div>
          <div className="categoryHeader page-header fw-bold text-3xl">
            <h2>Support</h2>
          </div>
          <div>
            <form class=" max-w-sm mx-auto">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select orderid
              </label>
              <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose order id</option>
                <option value="orderid">OD1025541</option>
                <option value="orderid">OD1899991</option>
                <option value="orderid">OD9855541</option>
                <option value="orderid">OD7550258</option>
              </select>
              <br />

              <label>Query</label>
              <input
                class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="Title"
              />

              <br />
              <br />
              <label>Description</label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Description"
              ></textarea>
              <div class="flex-row-reverse space-x-8">
                <br />
                <br />
                <button
                  class=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Submit
                </button>
                {/* <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Cancel</button> */}
              </div>
            </form>
          </div>

          <br />
          <br />
          <hr />
          <br />

          <div class="mx-auto  max-w-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Ticket Id
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Order Id
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    TK111002589
                  </th>
                  <td class="px-6 py-4">OD1025541</td>
                  <td class="px-6 py-4">12/02/2024</td>
                  <td class="px-6 py-4">Open</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="footer-pin">
        <Footer />
      </div>
    </div>
  );
}

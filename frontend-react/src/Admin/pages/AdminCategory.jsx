import { Container, Row, Col } from "react-bootstrap";
import AdminNavBar from "../components/AdminNavBar";
import AdminSidebar from "../components/AdminSidebar";

export default function AdminCategory() {
  return (
    <div className="page-container">
      <AdminNavBar />
      <div className="content-container">
        <Container fluid>
          <Row>
            <Col xs={2}>
              <AdminSidebar />
            </Col>
            <Col xs={10}>
              <Row>
                <div class="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
                  <h2 class="text-2xl font-medium mb-4">Add Subcategory</h2>
                  <form>
                    <div class="mb-4">
                      <label
                        for="name"
                        class="block text-gray-700 font-medium mb-2"
                      >
                        Category Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                      />
                    </div>
                    <div class="mb-4">
                      <label
                        for="message"
                        class="block text-gray-700 font-medium mb-2"
                      >
                        Description
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                        rows="5"
                      ></textarea>
                    </div>
                    <div class="flex justify-between ">
                      <div class="mb-4">
                        <label
                          for="age"
                          class="block text-gray-700 font-medium mb-2"
                        >
                          Price
                        </label>
                        <input
                          type="number"
                          id="age"
                          name="age"
                          class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                        />
                      </div>
                      <div class="mb-4">
                        <label
                          for="age"
                          class="block text-gray-700 font-medium mb-2"
                        >
                          Estimated Service Time
                        </label>
                        <input
                          type="number"
                          id="age"
                          name="age"
                          class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                        />
                      </div>
                    </div>

                    <label
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      for="multiple_files"
                    >
                      Upload Images
                    </label>
                    <input
                      class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="multiple_files"
                      type="file"
                      multiple
                    />
                    <br />

                    <div>
                      <button
                        type="submit"
                        class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                      >
                        Add Sub-Category
                      </button>
                    </div>
                  </form>
                </div>
              </Row>
              <Row>
                <Col>
                  <div class="mx-auto mx-w-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" class="px-6 py-3">
                            Category Id
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Service Name
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Category
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Description
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Price
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Time
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Image Url
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            CAT101547
                          </th>
                          <td class="px-6 py-4">Tap Repair</td>
                          <td class="px-6 py-4">Plumbing</td>
                          <td class="px-6 py-4">DESs</td>
                          <td class="px-6 py-4">1200</td>
                          <td class="px-6 py-4">20 min</td>
                          <td class="px-6 py-4">http:/efeaf.com</td>
                          <td class="px-6 py-4">
                            <div>
                              <button
                                type="button"
                                class=" w-40 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                              >
                                Delete
                              </button>
                              <button
                                type="button"
                                class="w-40 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                              >
                                Edit
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

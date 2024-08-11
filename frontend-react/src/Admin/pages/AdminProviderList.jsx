import { Col, Container, Row } from "react-bootstrap";
import AdminNavBar from "../components/AdminNavBar";
import AdminSidebar from "../components/AdminSidebar";

export default function AdminProviderList() {
  return (
    <div className="page-container">
      <AdminNavBar />
      <div className="content-container">
        <Container>
          <Row>
            <Col xs={2}>
              <AdminSidebar />
            </Col>
            <Col xs={10}>
              <div class="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
                <h2 class="text-2xl font-medium mb-4">Add Subcategory</h2>
                <form>
                  <div class="mb-4">
                    <label
                      for="name"
                      class="block text-gray-700 font-medium mb-2"
                    >
                      Provider Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                    />
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
                  <div class="mb-4">
                    <label
                      for="name"
                      class="block text-gray-700 font-medium mb-2"
                    >
                      Provider Email
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
                      for="name"
                      class="block text-gray-700 font-medium mb-2"
                    >
                      Provider Password
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                    />
                  </div>
                  <div class="flex justify-between ">
                    <div class="mb-4">
                      <label
                        for="gender"
                        class="block text-gray-700 font-medium mb-2"
                      >
                        Gender
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        className=" w-48 border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                        required
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div class="mb-4">
                      <label
                        for="age"
                        class="block text-gray-700 font-medium mb-2"
                      >
                        Mobile
                      </label>
                      <input
                        type="tel"
                        name="tel"
                        class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                      />
                    </div>
                  </div>

                  <div class="flex justify-between">
                    <div class="mb-4">
                      <label
                        for="category"
                        class="block text-gray-700 font-medium mb-2"
                      >
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        className="w-48 border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                        required
                      >
                        <option value="">Select Category</option>
                      </select>
                    </div>
                    <div class="mb-4">
                      <label
                        for="age"
                        class="block text-gray-700 font-medium mb-2"
                      >
                        Pincode
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                      />
                    </div>
                  </div>

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
            </Col>
          </Row>
          <Row>
            <Col xs={2}></Col>
            <Col xs={10}>
              <div class="">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Provider Id
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Pincode
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Mobile
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Gender
                      </th>
                      <th scope="col" class="px-6 py-3">
                        City
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Image URL
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
                        P12101547
                      </th>
                      <td class="px-6 py-4">411055</td>
                      <td class="px-6 py-4">Plumbing</td>
                      <td class="px-6 py-4">Ramesh</td>
                      <td class="px-6 py-4">ramesh@suresh.com</td>
                      <td class="px-6 py-4">9566658457</td>
                      <td class="px-6 py-4">Male</td>
                      <td class="px-6 py-4">Pune</td>
                      <td class="px-6 py-4">
                        <img
                          alt="Ramesh"
                          className="h-20 w-20"
                          src="https://images.unsplash.com/photo-1528953030358-b0c7de371f1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtlcnxlbnwwfHwwfHx8MA%3D%3D"
                        ></img>
                      </td>
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
        </Container>
      </div>
    </div>
  );
}

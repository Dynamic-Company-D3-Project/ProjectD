import { Col, Row } from "react-bootstrap";
import ProviderNavBar from "../components/ProviderNavBar";
import AdminSidebar from "../../Admin/components/AdminSidebar";

export default function ProviderDetails() {
  return (
    <div className="page-container">
      <ProviderNavBar />
      <div className="content-container">
        <Row>
          <Col xs={2}>
            <AdminSidebar />
          </Col>
          <Col xs={10}>
            <div class="mx-4 my-8 justify-start">
              <div className="inline-flex">
                <div class="d-flex justify-start flex-col mr-10">
                  <img
                    class="w-60 h-60 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                    src="/"
                  />
                  <h2>Hello Ramesh</h2>
                </div>
                <div>
                  <form>
                    <div class="mb-4">
                      <label
                        for="name"
                        class="block text-gray-700 font-medium mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value="Ramesh"
                        class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                      />
                    </div>
                    <div class="flex justify-between ">
                      <div class="mb-4">
                        <label
                          for="email"
                          class="block text-gray-700 font-medium mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          value="Ramesh@suresh.com"
                          class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                        />
                      </div>
                      <div class="mb-4">
                        <label
                          for="mobile"
                          class="block text-gray-700 font-medium mb-2"
                        >
                          Mobile
                        </label>
                        <input
                          type="number"
                          id="mobile"
                          name="mobile"
                          value="9585658958"
                          class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                        />
                      </div>
                    </div>
                    <div class="flex justify-between ">
                      <div class="mb-4">
                        <label
                          for="age"
                          class="block text-gray-700 font-medium mb-2"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          id="age"
                          name="age"
                          value="Pune"
                          class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                        />
                      </div>
                      <div class="mb-4">
                        <label
                          for="age"
                          class="block text-gray-700 font-medium mb-2"
                        >
                          Pincode
                        </label>
                        <input
                          type="text"
                          id="pincode"
                          name="pincode"
                          value="411057"
                          class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                        />
                      </div>
                    </div>
                    <div class="mb-4">
                      <label class="block text-gray-700 font-medium mb-2">
                        Select SubCategory
                      </label>
                      <div class="flex flex-wrap -mx-2">
                        <div class="px-2 w-1/3">
                          <label
                            for=""
                            class="block text-gray-700 font-medium mb-2"
                          >
                            <input
                              type="checkbox"
                              id=""
                              name=""
                              value=""
                              class="mr-2"
                            />
                            AC Fitting
                          </label>
                        </div>

                        <div class="px-2 w-1/3">
                          <label
                            for=""
                            class="block text-gray-700 font-medium mb-2"
                          >
                            <input
                              type="checkbox"
                              id=""
                              name=""
                              value=""
                              class="mr-2"
                            />
                            AC Fitting
                          </label>
                        </div>
                        <div class="px-2 w-1/3">
                          <label
                            for=""
                            class="block text-gray-700 font-medium mb-2"
                          >
                            <input
                              type="checkbox"
                              id=""
                              name=""
                              value=""
                              class="mr-2"
                            />
                            AC Fitting
                          </label>
                        </div>
                      </div>
                    </div>

                    <label
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      for="multiple_files"
                    >
                      Upload Profile Image
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
                        Update Profile
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

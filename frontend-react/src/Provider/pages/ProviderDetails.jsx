import { useEffect, useState } from "react";
import {
  getProviderDetails,
  updateProviderDetails,
} from "../services/provider";
import { toast } from "react-toastify";

export default function ProviderDetails() {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  async function updateProvider() {
    const result = await updateProviderDetails({
      email,
      mobile,
      city,
      pincode,
    });
    if (result["status"] === "error") toast.error("unable to update");
    else {
      toast.success("details updated successfully");
    }
  }

  const [provider, setProvider] = useState([]);

  useEffect(() => {
    loadProvider();
  }, []);

  async function loadProvider() {
    const result = await getProviderDetails();
    if (result["status"] === "error") toast.error("unable to load data");
    else {
      toast.success("details loaded successfully");
      setProvider(result["data"]);
    }
  }

  return (
    <div class="mx-4 my-8 justify-start">
      <div className="inline-flex">
        <div class="d-flex justify-start flex-col mr-10">
          <img
            class="w-60 h-60 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src="/assets/provider.avif"
            alt={sessionStorage.getItem("name")}
          />
          <br />
          <h2>Hello {sessionStorage.getItem("name")}</h2>
        </div>
        <div>
          <form>
            <div class="mb-4">
              <label for="name" class="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                disabled
                id="name"
                name="name"
                placeholder={sessionStorage.getItem("name")}
                class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              />
            </div>
            <div class="flex justify-between ">
              <div class="mb-4">
                <label for="email" class="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  id="email"
                  name="email"
                  placeholder={provider.email}
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
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                  type="number"
                  id="mobile"
                  name="mobile"
                  value={provider.phone_number}
                  class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div class="mb-4">
                <label for="city" class="block text-gray-700 font-medium mb-2">
                  City
                </label>
                <input
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  type="text"
                  id="city"
                  name="city"
                  value={provider.city}
                  class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                />
              </div>
              <div class="mb-4">
                <label
                  for="pincode"
                  class="block text-gray-700 font-medium mb-2"
                >
                  Pincode
                </label>
                <input
                  onChange={(e) => {
                    setPincode(e.target.value);
                  }}
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={provider.pincode}
                  class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>
            {/* <div class="mb-4">
              <label class="block text-gray-700 font-medium mb-2">
                Select SubCategory
              </label>
              <div class="flex flex-wrap -mx-2">
                <div class="px-2 w-1/3">
                  <label for="" class="block text-gray-700 font-medium mb-2">
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
                  <label for="" class="block text-gray-700 font-medium mb-2">
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
                  <label for="" class="block text-gray-700 font-medium mb-2">
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
            /> */}
            <br />

            <div>
              <button
                type="submit"
                class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                onClick={updateProvider}
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

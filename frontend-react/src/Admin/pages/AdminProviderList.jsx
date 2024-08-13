import { Col, Container, Row } from "react-bootstrap";
import AdminNavBar from "../components/AdminNavBar";
import AdminSidebar from "../components/AdminSidebar";
import axios from 'axios';
import config  from "../../config";
import { useState, useEffect } from 'react';


export default function AdminProviderList() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [gender, setGender] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [providerImagePath, setProviderImagePath] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  

  //---------------------------------------------------
 
  const [providers, setProviders] = useState([""]);
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   gender: '',
  //   mobile: '',
  //   category: '',
  //   pincode: '',
  //   images: [] // To handle file uploads
  // });

  // Fetch data from API when the component mounts
  useEffect(() => {
    axios.get(config.dotNetApi+'admin/Provider')
        .then(response => {
          setProviders(response.data);
            console.log(response.data)
        })
        .catch(error => {
          console.log(error)
           
        });
}, []);
useEffect(() => {
  console.log('Providers state updated:', providers);
}, [providers]);

const handleSubmit = async (event) => {
  event.preventDefault();
  setIsSubmitting(true);
  setError(null);

  // Validate form fields
  if (!email || !firstName || !lastName || !password || !phoneNumber || !city || !country || !providerImagePath || !zipCode) {
    setError("All fields are required.");
    setIsSubmitting(false);
    return;
  }

  try {
    console.log({
      "email": email,
      "firstName": firstName,
      "gender": gender,
      "lastName": lastName,
      "password": password,
      "phoneNumber": phoneNumber,
      "city": city,
      "country": country,
      "isDeleted": 0,
      "providerImagePath": providerImagePath,
    })
    await axios.post(config.dotNetApi+'admin/Provider', {
      "email": email,
      "firstName": firstName,
      "gender": gender,
      "lastName": lastName,
      "password": password,
      "phoneNumber": phoneNumber,
      "city": city,
      "country": country,
      "isDeleted": 0,
      "providerImagePath": providerImagePath,
      zipCode,
    }
    );
    console.log("try");
    setError(null);
    alert('Provider added successfully!');
 
    // Clear form fields
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setPhoneNumber("");
    setCity("");
    setCountry("");
    setProviderImagePath("");
    setZipCode("");

  } catch (error) {
    alert(error);
    setError('Error submitting form.');
  } finally {
    setIsSubmitting(false);
  }
};

const OnDelete = (id)=>{
  axios.put(`${config.dotNetApi}admin/Provider/delete/${id}`)
  
    .then(response => {
      if (response.status === 200) {
       
        const updatedProvider = providers.filter(provider => provider.id != id);
        setProviders(updatedProvider);
      }
    })
    .catch(error => {
      console.log(error);
    });
  //   orders.splice(index,1)
  //   setOrders([...orders])
 }  
  return (
    <div className="page-container">
      <AdminNavBar />
      <div className="content-container">
      <Container fluid>
      <Row>
        <Col xs={12} md={3} lg={2}>
          <AdminSidebar />
        </Col>
        <Col xs={12} md={9} lg={10}>
          <div className="bg-white border rounded-lg p-4 mx-auto my-4 max-w-2xl">
            <h2 className="text-2xl font-medium mb-4">Add Provider</h2>
            <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Provider Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
            City
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700 font-medium mb-2">
            Country
          </label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="providerImagePath" className="block text-gray-700 font-medium mb-2">
            Provider Image Path
          </label>
          <input
            type="text"
            id="providerImagePath"
            value={providerImagePath}
            onChange={(e) => setProviderImagePath(e.target.value)}
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="zipCode" className="block text-gray-700 font-medium mb-2">
            Zip Code
          </label>
          <input
            type="number"
            id="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          />
        </div>

        <Row className="mb-4">
          <Col xs={12} md={6}>
            <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">
              Gender
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            >
              <option value="">Select gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>
          </Col>
        </Row>

        {/* <div className="mb-4">
          <label htmlFor="providerImage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Upload Image
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="providerImage"
            type="file"
            onChange={(e) => setProviderImagePath(e.target.files[0]?.name || "")} // Adjust based on actual upload handling
          />
        </div> */}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Add Provider'}
        </button>
      </form>
          </div>

          <div className="table-responsive">
            <table className="table text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Provider Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Pincode
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Mobile
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-3">
                    City
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Image URL
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {providers.map((provider)=>{
                  return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {provider.id}
                  </th>
                  <td className="px-6 py-4">{provider.zipCode}</td>
                  <td className="px-6 py-4">Plumbing</td>
                  <td className="px-6 py-4">{provider.firstName} {provider.lastName}</td>
                  <td className="px-6 py-4">{provider.email}</td>
                  <td className="px-6 py-4">{provider.phoneNumber}</td>
                  <td className="px-6 py-4">{provider.gender}</td>
                  <td className="px-6 py-4">{provider.city}</td>
                  <td className="px-6 py-4">
                    <img
                      alt="Ramesh"
                      className="img-fluid h-20 w-20"
                      src="https://images.unsplash.com/photo-1528953030358-b0c7de371f1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtlcnxlbnwwfHwwfHx8MA%3D%3D"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <button
                      
                      onClick={()=>{
                        OnDelete(provider.id)
                    }}
                        type="button"
                        className="w-full mb-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        Delete
                      </button>
                      {/* <button
                        type="button"
                        className="w-full focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900"
                      >
                        Edit
                      </button> */}
                    </div>
                  </td>
                </tr>
                })}
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

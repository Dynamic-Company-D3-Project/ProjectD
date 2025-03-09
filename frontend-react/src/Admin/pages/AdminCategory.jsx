import { Container, Row, Col } from "react-bootstrap";
import AdminNavBar from "../components/AdminNavBar";
import AdminSidebar from "../components/AdminSidebar";
import axios from 'axios';
import config  from "../../config";
import { useState, useEffect } from 'react';

export default function AdminCategory() {
  const [formData, setFormData] = useState({
    id: 0,
    categoryName: '',
    description: '',
    image: '',
    isVisible: 0,
    price: 0,
    rating: 0,
    categoryId: 0
  });

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from API
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`con`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    const fetchSubCategories = async () => {
      try {
        const response = await axios.get(`${config.dotNetApi}Category/getSubcategory`);
        setSubCategories(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    // fetchCategories();
    fetchSubCategories();

  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('YOUR_API_ENDPOINT_FOR_SUBMISSION', formData);
      alert('Data submitted successfully');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
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
              <div class="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
                <h2 class="text-2xl font-medium mb-4">Add Subcategory</h2>
                <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="categoryName" className="form-label">Category Name</label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            className="form-control"
            value={formData.categoryName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            className="form-control"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

      

       

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            className="form-control"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating</label>
          <input
            type="number"
            id="rating"
            name="rating"
            className="form-control"
            value={formData.rating}
            onChange={handleChange}
            required
            min="0"
            max="5"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="categoryId" className="form-label">Category</label>
          <select
            id="categoryId"
            name="categoryId"
            className="form-select"
            value={formData.categoryId}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={4}></Col>
            <Col xs={8}>
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
                      {/* <th scope="col" class="px-6 py-3">
                        Category
                      </th> */}
                      <th scope="col" class="px-6 py-3">
                        Description
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Price
                      </th>
                      {/* <th scope="col" class="px-6 py-3">
                        Time
                      </th> */}
                      <th scope="col" class="px-6 py-3">
                        Image Url
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {subcategories.map((subCat)=>( 
                      <tr key={subCat.categoryId} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {subCat.categoryId}
                      </th>
                     
                      <td class="px-6 py-4">{subCat.categoryName}</td>
                      <td class="px-6 py-4">{subCat.description}</td>
                      <td class="px-6 py-4">{subCat.price}</td>
                      <td class="px-6 py-4">{subCat.image}</td>

                      {/* <td class="px-6 py-4">http:/efeaf.com</td> */}
                      <td class="px-6 py-4">
                        <div>
                          <button
                            type="button"
                            class=" w-40 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                          >
                            Delete
                          </button>
                          {/* <button
                            type="button"
                            class="w-40 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                          >
                            Edit
                          </button> */}
                        </div>
                      </td>
                    </tr>
                    ))}
                    
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

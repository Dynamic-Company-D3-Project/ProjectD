import React, { useState, useEffect } from "react";
import VerticalNavbar from "../components/VerticalNavbar";
import SubCategory from "../cards/ServicesSubCategoryCard";
import { CategorySearchBar } from "../components/SearchBar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";
import NavBarUser from "../components/NavBarUser";
import { SPRING_URL } from "../services/Service";
import NavBar from "../components/NavBar";
import { toast } from "react-toastify";

function ViewServices() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0 && selectedCategory === null) {
      const firstCategory = categories[0].name;
      setSelectedCategory(firstCategory);
    }
  }, [categories]);

  useEffect(() => {
    if (selectedCategory) {
      const category = categories.find(cat => cat.name === selectedCategory);
      if (category) {
        setSubCategories(category.subCategories);
      }
    }
  }, [selectedCategory, categories]);

  async function loadCategories() {
    try {
      let categoryResponse = await axios.get(`${SPRING_URL}/catgeory/categoryListWithSubcategory`);
      setCategories(categoryResponse.data);
      console.log(categoryResponse.data);
    } catch (error) {
      console.error("There was an error fetching the data!", error);
      toast.error("Error fetching the details");
    }
  }

  function getCategoryId() {
    const nameCategory = categories.find(cat => cat.name === selectedCategory);
    return nameCategory ? nameCategory.id : null;
  }

  const token = sessionStorage.getItem('authToken');

  return (
    <div className="page-container">
      {token ? <NavBarUser /> : <NavBar />}
      <div className="user-viewServices content-container">
        <div style={{ marginTop: "1rem" }}>
          <CategorySearchBar />
        </div>
        {selectedCategory && (
          <div className="flex justify-center items-center w-full h-250 mt-5 flex-col">
            <Link to={`/services/${getCategoryId()}`}>
              <h1 className="mb-4 text-3xl font-extrabold text-yellow-950 dark:text-white md:text-5xl lg:text-6xl">
                {selectedCategory}
              </h1>
            </Link>
          </div>
        )}
        <div className="flex">
          <div className="w-64">
            <VerticalNavbar onSelectCategory={setSelectedCategory} />
          </div>
          <div className="flex-1">
  <div className="w-full min-h-[200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 ml-2">
    {subCategories.map((service, index) => (
      <SubCategory
        key={index}
        text={service.categoryName}
        price={service.price}
        id={service.id}
      />
    ))}
  </div>
</div>

        </div>
      </div>
      <div className="footer-pin">
        <Footer />
      </div>
    </div>
  );
}

export default ViewServices;

import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import VerticalNavbar from "../components/VerticalNavbar";
import SubCategory from "../cards/ServicesSubCategoryCard";
import { CategorySearchBar } from "../components/SearchBar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";
import { SPRING_URL } from "../services/Service";
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

  return (
    <div className="page-container">
      <Navbar />
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
            <div className="w-full h-250 flex flex-wrap justify-center items-start ">
              {subCategories.map((service, index) => (
                <SubCategory
                  key={index}
                  text={service.categoryName}
                  price={service.price}
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

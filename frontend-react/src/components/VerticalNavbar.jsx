import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { SPRING_URL } from "../services/Service";
import { toast } from "react-toastify";

const VerticalNavbar = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  async function loadCategories() {
    try {
      let categoryResponse = await axios.get(`${SPRING_URL}/catgeory/categoryList`);
      setCategories(categoryResponse.data);
    } catch {
      toast.error("Error fetching the category");
    }
  }

  return (
    <aside 
    id="sidebar"
    class="fixed relative mt-1 ml-3 mb-4 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <a href="/" className="flex items-center ps-2.5 mb-5">
          <img
            src="/logo512.png"
            className="h-6 me-3 sm:h-7"
            alt="QuikEasy Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            QuikEasy
          </span>
        </a>
        <ul className="space-y-2 font-medium">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={() => onSelectCategory(category.name)}
              >
                <span className="ms-3">{category.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default VerticalNavbar;

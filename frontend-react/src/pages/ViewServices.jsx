import React, { useState } from "react";
import Navbar from "../components/NavBar";
import VerticalNavbar from "../components/VerticalNavbar";
import SubCategory from "../cards/ServicesSubCategoryCard";
import { CategorySearchBar } from "../components/SearchBar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const services = {
  "Home Salon": [
    { text: "Pedicure", price: "300" },
    { text: "Manicure", price: "250" },
    { text: "Haircut", price: "200" },
    { text: "Facial", price: "500" },
    { text: "Waxing", price: "400" },
  ],
  "Home Cleaning": [
    { text: "Full Home Deep Cleaning", price: "1500" },
    { text: "Kitchen Cleaning", price: "800" },
    { text: "Bathroom Cleaning", price: "500" },
    { text: "Sofa Cleaning", price: "600" },
    { text: "Carpet Cleaning", price: "700" },
  ],
  "Appliance Repair": [
    { text: "Air Conditioner Repair", price: "500" },
    { text: "Refrigerator Repair", price: "400" },
    { text: "Washing Machine Repair", price: "450" },
    { text: "Microwave Repair", price: "300" },
    { text: "TV Repair", price: "350" },
  ],
  Plumbing: [
    { text: "Tap Repair", price: "200" },
    { text: "Drain Cleaning", price: "300" },
    { text: "Leakage Repair", price: "250" },
    { text: "Toilet Repair", price: "400" },
    { text: "Pipe Installation", price: "350" },
  ],
  Electrician: [
    { text: "Fan Repair", price: "150" },
    { text: "Light Installation", price: "100" },
    { text: "Wiring", price: "500" },
    { text: "Socket Repair", price: "200" },
    { text: "Fuse Repair", price: "250" },
  ],
  Carpentry: [
    { text: "Furniture Assembly", price: "300" },
    { text: "Door Repair", price: "350" },
    { text: "Window Repair", price: "250" },
    { text: "Shelf Installation", price: "400" },
    { text: "Wardrobe Repair", price: "450" },
  ],
  "Pest Control": [
    { text: "Cockroach Control", price: "600" },
    { text: "Termite Control", price: "1000" },
    { text: "Bed Bug Control", price: "800" },
    { text: "Mosquito Control", price: "500" },
    { text: "Rodent Control", price: "700" },
  ],
  "Beauty Services": [
    { text: "Makeup", price: "1000" },
    { text: "Hair Styling", price: "800" },
    { text: "Bridal Makeup", price: "5000" },
    { text: "Party Makeup", price: "1500" },
    { text: "Nail Art", price: "600" },
  ],
  Fitness: [
    { text: "Yoga Training", price: "700" },
    { text: "Personal Training", price: "1000" },
    { text: "Zumba Classes", price: "600" },
    { text: "Pilates Classes", price: "800" },
    { text: "Aerobics Classes", price: "500" },
  ],
  "Home Painting": [
    { text: "Wall Painting", price: "1500" },
    { text: "Ceiling Painting", price: "1000" },
    { text: "Door Painting", price: "800" },
    { text: "Window Painting", price: "600" },
    { text: "Furniture Painting", price: "700" },
  ],
};
function ViewServices() {
  const [selectedCategory, setSelectedCategory] = useState("Home Salon"); // initially displays the category 1

  return (
    <div className="page-container">
      <Navbar />
      <div className="user-viewServices content-container">
        <div style={{ marginTop: "1rem" }}>
          <CategorySearchBar />
        </div>
        <div className="flex justify-center items-center w-500 h-250 mt-5 flex-col">
          <Link to={`/services/${selectedCategory}`}>
            <h1 class="mb-4 text-3xl font-extrabold text-yellow-950 dark:text-white md:text-5xl lg:text-6xl">
              {selectedCategory}
            </h1>
          </Link>
        </div>
        <div className="container d-inline-flex m-2 flex-row">
          <div
            className="container"
            style={{ width: "300px", height: "100vh" }}
          >
            <VerticalNavbar onSelectCategory={setSelectedCategory} />
          </div>
          <div
            className="w-300 h-250"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              maxWidth: "1200px",
              justifyContent: "space-between",
              alignSelf: "auto",
            }}
          >
            {services[selectedCategory].map((service, index) => (
              <SubCategory
                key={index}
                text={service.text}
                price={service.price}
              />
            ))}
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

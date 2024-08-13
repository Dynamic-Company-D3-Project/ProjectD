import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { SearchBar } from "../components/SearchBar";
import { HomeCategoryCard, HomeSubCategoryCard } from "../cards/HomeCard";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { SPRING_URL } from "../services/Service";
import { ToastContainer, toast } from "react-toastify";
import NavBarUser from "../components/NavBarUser";

function Home() {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const categoryResponse = await axios.get(`${SPRING_URL}/catgeory/categoryList`);
      const subCategoryResponse = await axios.get(`${SPRING_URL}/catgeory/categoryListWithSubcategory`);
      setCategories(categoryResponse.data);
      setSubCategories(subCategoryResponse.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError("Error fetching the data! Try again");
      toast.error("Error fetching the data! Try again");
      console.error("There was an error fetching the data!", error);
    }
  };

  const token = sessionStorage.getItem('authToken');
  console.log(subCategories)
  return (
    <div className="container-fluid">
      {token ? <NavBarUser /> : <NavBar />}
      <div className="content-container flex-col" style={{ gap: "10px" }}>
        <div className="flex justify-center items-center w-500 h-250 mt-5 flex-col">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Book trusted help
            </span>{" "}
            <br /> to your Door Step.
          </h1>
          <br />
        </div>
        <div>
          <SearchBar />
        </div>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {!isLoading && !error && (
          <>
            <div
              className="container w-300 h-250 mt-5"
              style={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "1200px",
                justifyContent: "center",
              }}
            >
              {categories.slice(0, 6).map((cat) => (
                <HomeCategoryCard
                  key={cat.id}
                  category_name={cat.name}
                  description={cat.description}
                  id={cat.id}
                />
              ))}
            </div>
            <div
              className="container d-flex flex-column bd-highlight mb-3"
              style={{ margin: "100px" }}
            >
              {subCategories.slice(0,5).map((mapData) => (
          
                <Container key={mapData.id}>
                  <Row>
                    <Col className="categoryHeading">{mapData.name}</Col>
                    <Col style={{ display: "inline-flex", justifyContent: "flex-end" }}>
                      <Link
                        to={`/services/${mapData.id}`}
                        className="btn btn-outline btn-accent"
                        style={{ marginRight: "7rem" }}
                      >
                        See All
                      </Link>
                    </Col>
                  </Row>{
                    
                  }
                  <HomeSubCategoryCard
                    category={mapData.name}
                    subCategoryData={mapData.subCategories}
                    id={mapData.id}
                  />
                </Container>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="footer-pin">
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
}

export default Home;

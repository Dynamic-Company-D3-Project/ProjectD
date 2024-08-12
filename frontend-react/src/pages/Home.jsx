import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { SearchBar } from "../components/SearchBar";
import { HomeCategoryCard, HomeSubCategoryCard } from "../cards/HomeCard";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { SPRING_URL } from "../services/Service";
import { ToastContainer,toast } from "react-toastify";

function Home() {
  let [category, setCategory] = useState([]);
  let [subCategories, setSubCategory] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      let categoryResponse = await axios.get(SPRING_URL + '/catgeory/categoryList');
      let subCategoryResponse = await axios.get(SPRING_URL+'/catgeory/categoryListWithSubcategory')
     // console.log(subCategoryResponse.data);
      setCategory(categoryResponse.data);
      setSubCategory(subCategoryResponse.data);
    } catch (error) {
      console.error("There was an error fetching the data!", error);
      toast.error("Error fetching the data!! Try again")
    }
  };

  return (
    <div className="page-container">
      <NavBar />
      <div className="content-container flex-col" style={{ gap: "10px" }}>
        <div className="flex justify-center items-center w-500 h-250 mt-5 flex-col">
          <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Book trusted help
            </span>{" "}
            <br /> to your Door Step.
          </h1>
          <br />
        </div>
        <div>
          <SearchBar />
        </div>
        <div
          className="container w-300 h-250 mt-5 "
          style={{
            display: "flex",
            flexWrap: "wrap",
            maxWidth: "1200px",
            justifyContent: "center",
          }}
        >
          {category.slice(0, 8).map((cat) => {
            return (
              <HomeCategoryCard
                category_name={cat.name}
                description={cat.description}
                id = {cat.id}
              />
            );
          })}
        </div>
        <div
          className="container d-flex flex-column bd-highlight mb-3"
          style={{
            margin: "100px",
          }}
        >
          {subCategories.map((mapData) => {
            return (
              <Container>
                <Row>
                  <Col className="categoryHeading">{mapData.name}</Col>
                  <Col
                    style={{
                      display: "inline-flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Link
                      to={`/services/${mapData.id}`}
                      className="btn btn-outline btn-accent"
                      style={{ marginRight: "7rem" }}
                    >
                      See All
                    </Link>
                  </Col>
                </Row>

                <HomeSubCategoryCard
                  category={mapData.name}
                  subCategoryData={mapData.subCategories}
                  id = {mapData.id}
                />
              </Container>
            );
          })}
        </div>
      </div>

      <div className="footer-pin">
        <Footer />
      </div>
    </div>
  );
}

export default Home;

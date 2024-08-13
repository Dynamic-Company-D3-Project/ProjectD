import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SubCategoryHorizontalCard from "../cards/SubCategoryHorizontalCard";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { SPRING_URL } from "../services/Service";
import NavBarUser from "../components/NavBarUser";

function Category() {
  let [subCategory, setSubCategories] = useState([]);
  const { id } = useParams();
  //console.log(id)

  useEffect(() => {
    loadSubCategories();
  }, [id]);

  async function loadSubCategories() {
    let subCategoryResponse = await axios.get(`${SPRING_URL}/catgeory/categoryWithSubCategoryList/${id}`)
    console.log(subCategoryResponse.data);
    setSubCategories(subCategoryResponse.data);
  }
  const token = sessionStorage.getItem('authToken');
  return (
    <div className="page-container">
      {token ? <NavBarUser /> : <NavBar />}
      <div className="content-container container" style={{ display: "block", padding: "2em 5em 0" }}>
        <div className="mb-2 p-4" style={{ display: "block" }}>
          <h1 className="categoryHeading">{subCategory.name}</h1>
        </div>
        <div>
          <Container>
            <Row>
              <Col>
                {subCategory.subCategories && subCategory.subCategories.length > 0 ? (
                  subCategory.subCategories.map((sub) => (
                    <div key={sub.id} style={{ display: "grid", margin: "2em" }}>
                      <SubCategoryHorizontalCard
                        text={sub.categoryName}
                        price={sub.price}
                        description={sub.description}
                      />
                    </div>
                  ))
                ) : (
                  <p>No subcategories available</p>
                )}
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="footer-pin">
        <Footer />
      </div>
    </div>
  );
  
}

export default Category;

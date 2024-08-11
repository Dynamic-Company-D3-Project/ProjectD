import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SubCategoryHorizontalCard from "../cards/SubCategoryHorizontalCard";
import { Container, Row, Col } from "react-bootstrap";
function Category() {
  let [subCategory, setSubCategories] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    loadSubCategories();
  }, []);

  async function loadSubCategories() {
    let data = await import("../dummy/subCategoryWithDesc.json");
    //console.log(data["map"]);
    let subData = data["map"].filter((sub) => {
      if (sub["category"] === category) {
        return sub;
      }
    });
    console.log(subData[0].services);

    setSubCategories(subData[0].services);
  }

  return (
    <div className="page-container">
      <NavBar />
      <div
        className="content-container container "
        style={{ display: "block", padding: "2em 5em 0" }}
      >
        <div className="mb-2 p-4" style={{ display: "block" }}>
          <h1 className="categoryHeading">{category}</h1>
        </div>
        <div>
          <Container>
            <Row>
              <Col>
                {subCategory.map((sub) => {
                  return (
                    <div style={{ display: "grid", margin: "2em" }}>
                      <SubCategoryHorizontalCard
                        text={sub.text}
                        price={sub.price}
                        description={sub.description}
                      />
                    </div>
                  );
                })}
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

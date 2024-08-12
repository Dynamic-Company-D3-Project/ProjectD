import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SubCategoryHorizontalCard from "../cards/SubCategoryHorizontalCard";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { SPRING_URL } from "../services/Service";
function Category() {
  let [subCategory, setSubCategories] = useState([]);
  const { id } = useParams();
  //console.log(id)

  useEffect(() => {
    loadSubCategories();
  }, [id]);

  async function loadSubCategories() {
    // let data = await import("../dummy/subCategoryWithDesc.json");
    let subCategoryResponse = await axios.get(`${SPRING_URL}/catgeory/categoryWithSubCategoryList/${id}`)
    console.log(subCategoryResponse.data);
    setSubCategories(subCategoryResponse.data);
    //console.log(data["map"]);
    // let subData = subCategoryResponse["map"].filter((sub) => {
    //   if (sub["category"] === category) {
    //     return sub;
    //   }
    // });
    // console.log(subData[0].services);

    // setSubCategories(subData[0].services);
  }

  // return (
  //   <div className="page-container">
  //     <NavBar />
  //     <div
  //       className="content-container container "
  //       style={{ display: "block", padding: "2em 5em 0" }}
  //     >
  //       <div className="mb-2 p-4" style={{ display: "block" }}>
  //         <h1 className="categoryHeading">{subCategory.name}</h1>
  //       </div>
  //       <div>
  //         <Container>
  //           <Row>
  //             <Col>
  //               {subCategory.subCategories.map((sub) => {
  //                 return (
  //                   <div style={{ display: "grid", margin: "2em" }}>
  //                     <SubCategoryHorizontalCard
  //                       text={sub.categoryName}
  //                       price={sub.price}
  //                       description={sub.description}
  //                     />
  //                   </div>
  //                 );
  //               })}
  //             </Col>
  //             <Col></Col>
  //           </Row>
  //         </Container>
  //       </div>
  //     </div>
  //     <div className="footer-pin">
  //       <Footer />
  //     </div>
  //   </div>
  // );
  return (
    <div className="page-container">
      <NavBar />
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

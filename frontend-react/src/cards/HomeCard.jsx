import { Row, Col } from "react-bootstrap";

export function HomeCategoryCard({ category_name, description }) {
  return (
    <a href={"/" + category_name}>
      <div
        className="card card-compact bg-base-100 shadow-xl"
        style={{ height: "250px", width: "250px", margin: "10px" }}
      >
        <figure>
          <img src="/assets/category.jpg" alt={category_name} />
        </figure>
        <div className="card-body h-24">
          <h2 className="card-title">{category_name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </a>
  );
}

export function HomeSubCategoryCard({ category, subCategoryData }) {
  return (
    <Row>
      {subCategoryData.slice(0, 4).map((sub) => {
        return (
          <Col style={{ paddingLeft: "0px " }}>
            <a href={"/" + category + "/" + sub}>
              <div
                className="card card-compact bg-base-100 shadow-xl"
                style={{
                  height: "250px",
                  width: "250px",
                  margin: "10px",
                }}
              >
                <figure>
                  <img src="/assets/SubCategory.jpg" alt={sub} />
                </figure>
                <div className="card-body h-24">
                  <h2 className="card-title">{sub}</h2>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </a>
          </Col>
        );
      })}
    </Row>
  );
}

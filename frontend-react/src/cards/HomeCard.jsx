import { Row, Col } from "react-bootstrap";

export function HomeCategoryCard({ category_name, description, id }) {
  return (
    <a href={`/services/${id}`}>
      <div
        className="card card-compact bg-base-100 shadow-xl"
        style={{
          width: "250px",
          margin: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <figure>
          <img
            src="/assets/category.jpg"
            alt={category_name}
            style={{ width: "100%", height: "150px" }}
          />
        </figure>
        <div
          className="card-body"
          style={{ flex: "1", display: "flex", flexDirection: "column" }}
        >
          <h2 className="card-title" style={{ marginBottom: "0.5rem" }}>
            {category_name}
          </h2>
          <p style={{ flex: "1", marginBottom: "1rem" }}>{description}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </a>
  );
}

export function HomeSubCategoryCard({ category, subCategoryData, id }) {
  return (
    <Row>
      {subCategoryData.sice(0,3).map((sub) => {
        return (
          <Col style={{ paddingLeft: "0px" }} key={sub.id}>
            {/* <a href={"/services/" + category + "/" + sub.categoryName}> */}
            <a href={`/services/${category}/${sub.id}`}>
              <div
                className="card card-compact bg-base-100 shadow-xl"
                style={{
                  width: "250px",
                  margin: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <figure style={{ flexShrink: 0 }}>
                  <img
                    src="/assets/SubCategory.jpg"
                    alt={sub.categoryName}
                    style={{ width: "100%", height: "auto" }}
                  />
                </figure>
                <div
                  className="card-body"
                  style={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <h2 className="card-title" style={{ marginBottom: "0.5rem" }}>
                    {sub.categoryName}
                  </h2>
                  <p
                    style={{
                      flex: "1",
                      marginBottom: "1rem",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {sub.description}
                  </p>
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

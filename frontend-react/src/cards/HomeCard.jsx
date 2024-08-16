import { Row, Col } from "react-bootstrap";

export function HomeCategoryCard({ category_name, description, id,image }) {
  return (
    <a href={`/services/${id}`}>
      <div
        className="card card-compact bg-base-100 shadow-xl"
        style={{
          width: "240px",
          margin: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <figure>
          <img
            src={image}
            alt={category_name}
            style={{ width: "100%", height: "180px" }}
          />
        </figure>
        <div
          className="card-body"
          style={{ flex: "1", display: "flex", flexDirection: "column" }}
        >
         <div className="flex justify-center items-center">
  <h2 className="card-title fw-bold text-center" style={{ marginBottom: "0.2rem" }}>
    {category_name}
  </h2>
</div>

          <p style={{ flex: "1", marginBottom: "1rem" }}>{description}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </a>
  );
}


const truncateDescription = (text, wordLimit) => {
  const words = text.split(" ");
  return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
};

export function HomeSubCategoryCard({ category, subCategoryData, id,image }) {
  console.log(image);
  
  return (
    <Row>
      {subCategoryData.slice(0,4).map((sub) => (
        <Col style={{ paddingLeft: "0px"}} key={sub.id}>
          <a href={`/services/${category}/${sub.id}`}>
            <div
              className="card card-compact bg-base-100 shadow-xl"
              style={{
                width: "240px",
                margin: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <figure style={{ flexShrink: 0 }}>
                <img src={image} alt={sub.categoryName} style={{ width: "100%", height: "190px" }} />
              </figure>
              <div className="card-body" style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <h2 className="card-title " style={{ marginBottom: "0.2rem" }}>{sub.categoryName}</h2>
                <p style={{ flex: "1", marginBottom: "1rem", overflow: "hidden", textOverflow: "ellipsis" }}>{truncateDescription(sub.description, 8)}</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </a>
        </Col>
      ))}
    </Row>
  );
}

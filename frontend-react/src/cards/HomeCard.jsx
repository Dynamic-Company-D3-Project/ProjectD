import { Row, Col } from "react-bootstrap";

export function HomeCategoryCard({ category_name, description }) {
  return (
    <a href={"/services/" + category_name}>
      <div
        className="card card-compact bg-base-100 shadow-xl"
        style={{ width: "250px", margin: "10px", display: "flex", flexDirection: "column" }}
      >
        <figure>
          <img src="/assets/category.jpg" alt={category_name} style={{ width: "100%", height: "150px" }} />
        </figure>
        <div className="card-body" style={{ flex: "1", display: "flex", flexDirection: "column" }}>
          <h2 className="card-title" style={{ marginBottom: "0.5rem" }}>{category_name}</h2>
          <p style={{ flex: "1", marginBottom: "1rem" }}>{description}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </a>
  );
}

// export function HomeSubCategoryCard({ category, subCategoryData }) {
//   return (
//     <Row>
//       {subCategoryData.slice(0, 4).map((sub) => {
//         return (
//           <Col style={{ paddingLeft: "0px " }}>
//             <a href={"/services/" + category + "/" + sub}>
//               <div
//                 className="card card-compact bg-base-100 shadow-xl"
//                 style={{
//                   height: "250px",
//                   width: "250px",
//                   margin: "10px",
//                 }}
//               >
//                 <figure>
//                   <img src="/assets/SubCategory.jpg" alt={sub} />
//                 </figure>
//                 <div className="card-body h-24">
//                   <h2 className="card-title">{sub}</h2>
//                   <div className="card-actions justify-end"></div>
//                 </div>
//               </div>
//             </a>
//           </Col>
//         );
//       })}
//     </Row>
//   );
// }
export function HomeSubCategoryCard({ category, subCategoryData }) {
  return (
    <Row>
      {subCategoryData.map((sub) => {
        return (
          <Col style={{ paddingLeft: "0px" }} key={sub.id}>
            <a href={"/services/" + category + "/" + sub.categoryName}>
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
                  <img src="/assets/SubCategory.jpg" alt={sub.categoryName} style={{ width: "100%", height: "auto" }} />
                </figure>
                <div className="card-body" style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <h2 className="card-title" style={{ marginBottom: "0.5rem" }}>{sub.categoryName}</h2>
                  <p style={{ flex: "1", marginBottom: "1rem", overflow: "hidden", textOverflow: "ellipsis" }}>{sub.description}</p>
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
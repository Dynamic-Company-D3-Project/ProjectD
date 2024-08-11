import { Link } from "react-router-dom";

function SubCategoryHorizontalCard({ text, price, description }) {
  return (
    <div
      className="card lg:card-side bg-base-100 shadow-xl"
      style={{
        borderRadius: "0px",
        width: "858px",
        height: "250px",
        padding: "1.75em 3em 2em 2em",
      }}
    >
      <figure>
        <img
          className="w-28 h-28 m-3 rounded-full"
          src="/assets/SubCategory.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{text}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={"/services" + { text }} className="btn btn-primary">
            Book
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SubCategoryHorizontalCard;

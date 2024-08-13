import { Link } from "react-router-dom";
import {toast} from "react-toastify"

function SubCategoryHorizontalCard({ text, price, description,id }) {

  const token = sessionStorage.getItem('authToken')
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
        <span className="text-xl font-semibold text-start text-primary" >₹{price}</span>
        <div className="card-actions justify-end">
        {token ? 
          <Link to={`/payment/${id}`} className="btn btn-primary">
            Book
          </Link> : 
          <Link to={"/login"} className="btn btn-primary">
            Book
          </Link>
             }
        </div>
      </div>
    </div>
  );
}

export default SubCategoryHorizontalCard;

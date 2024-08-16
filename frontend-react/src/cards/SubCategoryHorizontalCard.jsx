import { Link } from "react-router-dom";
import {toast} from "react-toastify"

function SubCategoryHorizontalCard({ text, price, description,id,image,name }) {

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
          className="w-200 h-40 m-3 rounded-full"
          src={image}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title fw-bold">{text}</h2>
        <p>{description}</p>
        <span className="text-xl font-semibold text-start text-primary" >₹{price}</span>
        <div className="card-actions justify-end">
        {token ? 
          <Link to={`/payment/${id}`} className="btn btn-success">
            Book
          </Link> : 
          <Link to={"/login"} className="btn btn-success">
            Book
          </Link>
             }
             <Link to={`/services/${name}/${id}`}>
             <button className="btn btn-primary">View</button></Link>
        </div>
      </div>
    </div>
  );
}

export default SubCategoryHorizontalCard;

import React from "react";
import { Link } from "react-router-dom";

const SubCategory = ({ text, price, id,image }) => {
  const token = sessionStorage.getItem('authToken');

  return (
    <div className="flex flex-col items-center bg-white border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105" style={{width:"270px", height:"340px"}}>
      <div className="w-full h-48 bg-gray-100">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={text}
        />
      </div>
      <div className="p-2 flex flex-col items-center">
        <h3 className="text-base font-semibold mb-1 text-primary" >{text}</h3>
        <p className="text-xl font-bold text-green-600 mb-1">&#x20B9; {price}</p>
        <Link to={token ? `/payment/${id}` : "/login"}>
          <button
            className="w-32 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Book
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SubCategory;

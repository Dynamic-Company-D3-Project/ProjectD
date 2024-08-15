import React from "react";
import { Link } from "react-router-dom";

const SubCategory = ({ text, price, id }) => {
  const token = sessionStorage.getItem('authToken');

  return (
    <div className="flex flex-col items-center bg-white border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="w-full h-48 bg-gray-100">
        <img
          className="w-full h-full object-cover"
          src="https://plus.unsplash.com/premium_photo-1661594651848-0f08f9abe17d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={text}
        />
      </div>
      <div className="p-4 flex flex-col items-center">
        <h3 className="text-base font-semibold mb-2 text-primary" >{text}</h3>
        <p className="text-xl font-bold text-green-600 mb-4">&#x20B9; {price}</p>
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

import React from "react";

export default function ReviewCard({ review }) {
  const getFirstWord = (text) => text.split(' ')[0];

  return (
    <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <img
              className="absolute top-0 left-0 w-full h-full bg-cover object-cover"
              src="https://picsum.photos/id/646/200/200"
              alt={`${review.user.firstName}'s profile`}
            />
          </div>
        </div>
        <div className="ml-4">
          <p className="text-gray-700 font-bold">
            {`${review.user.firstName} ${review.user.lastName}`}
          </p>
          <div className="flex items-center mt-1">
            {Array.from({ length: 5 }, (_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 fill-current ${
                  i < review.rating ? "text-yellow-500" : "text-gray-400"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <div className="mt-2">
            {/* <span className="font-bold text-gray-800">{getFirstWord(review.reivew)}</span> */}
            <p className="mt-1 text-gray-600">{review.reivew} </p>
          </div>
          <p className="text-sm text-gray-500 mt-1 font-bold">{new Date(review.reviewDate).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

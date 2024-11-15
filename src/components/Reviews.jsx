import React from "react";
import fondo from "../assets/fondo.jpg";

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    text: "Absolutely loved the food! The wine selection is incredible and the ambiance is perfect for a night out.",
  },
  {
    name: "Jane Smith",
    rating: 4,
    text: "Great experience overall! The staff was attentive, and the dishes were well-prepared. Will definitely come back.",
  },
  {
    name: "Alice Johnson",
    rating: 5,
    text: "One of the best dining experiences I've had. The flavors were exquisite and the presentation was beautiful!",
  },
];

const Review = ({ name, rating, text }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mb-6 h-full flex flex-col justify-between">
    <h3 className="text-lg font-semibold">{name}</h3>
    <div className="flex items-center mb-2">
      {Array.from({ length: rating }, (_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15.27L16.18 20 14.54 13.97 20 9.24l-7.19-.61L10 2 7.19 8.63 0 9.24l5.46 4.73L3.82 20z" />
        </svg>
      ))}
    </div>
    <p className="text-gray-700 flex-grow">{text}</p>
  </div>
);

const Reviews = () => {
  return (
    <div className="h-auto flex items-center justify-center py-10 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-black">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Review
              key={index}
              name={review.name}
              rating={review.rating}
              text={review.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

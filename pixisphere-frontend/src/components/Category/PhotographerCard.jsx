import React from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import Carousel from "./Carousel";

const PhotographerCard = ({ data }) => {
  const {
    name,
    location,
    rating,
    price,
    styles,
    tags,
    bio,
    profilePic,
    portfolio,
  } = data;

  return (
    <div 
    className="bg-gray-950 text-white rounded-2xl shadow-md overflow-hidden max-w-md mx-auto my-4 border border-gray-700 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4 p-4">
        <img
          src={profilePic}
          alt={name}
          className="w-20 h-20 object-cover rounded-full border-2 border-gray-600"
        />
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <div className="text-sm flex items-center gap-1 text-gray-400">
            <FaMapMarkerAlt size={12} />
            {location}
          </div>
          <div className="text-sm flex items-center gap-1 text-yellow-400">
            {rating} ★
          </div>
        </div>
      </div>

      {
        portfolio.length > 0 && (
          <Carousel portfolio = {portfolio}/>
        )
      }

      <div className="p-4 space-y-2">
        <p className="text-gray-300 text-sm">{bio}</p>
        <p className="text-sm">
          <span className="font-semibold text-white">Styles:</span>{" "}
          {styles.join(", ")}
        </p>
        <p className="text-sm">
          <span className="font-semibold text-white">Tags:</span>{" "}
          {tags.join(", ")}
        </p>
        <p className="text-sm">
          <span className="font-semibold text-white">Price:</span> ₹{price}
        </p>
      </div>
    </div>
  );
};

export default PhotographerCard;

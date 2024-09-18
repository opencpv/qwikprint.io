import React from "react";

const LocationCard = ({ icon: Icon, name, onClick }) => {
  return (
    <button
      className="w-full aspect-square flex flex-col items-center justify-center bg-green-500 rounded-lg"
      onClick={onClick}
    >
      <Icon className="text-white text-4xl" />
      <p className="text-white text-center mt-2">{name}</p>
    </button>
  );
};

export default LocationCard;

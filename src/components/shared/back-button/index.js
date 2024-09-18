import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const BackButton = ({ to, className = "" }) => {
  const navigate = useNavigate();

  return (
    <button
      className={`h-8 w-8 flex items-center justify-center rounded-full border-2 border-slate-900 ${className}`}
      onClick={() => navigate(to)}
    >
      <IoIosArrowBack className="text-slate-900 text-2xl" />
    </button>
  );
};

export default BackButton;

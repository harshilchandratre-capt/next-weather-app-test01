import React from "react";

const Button = ({ onClick }) => {
  return (
    <div className="w-max h-max">
      <button className="w-full h-full rounded-md text-m px-3 py-2 text-white bg-[crimson]" onClick={onClick}>Find</button>
    </div>
  );
};
export default Button;

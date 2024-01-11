import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

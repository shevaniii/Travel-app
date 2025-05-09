import React from 'react';

const Button = ({ text, onClick, variant = 'primary', icon: Icon, className = '' }) => {
  const baseStyle = "flex items-center justify-center rounded-lg font-medium transition";
  const variants = {
    primary: "bg-[#635BFF] text-white hover:bg-[#4a45d4]",
    secondary: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-100"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} px-4 py-3 ${className}`}
    >
      {Icon && <Icon className="mr-2" size={18} />}
      {text}
    </button>
  );
};

export default Button;

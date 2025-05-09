// src/components/common/Input.jsx
import React from 'react';

const Input = ({ value, onChange, placeholder, icon: Icon }) => {
  return (
    <div className="relative w-full">
      {Icon && <Icon className="absolute top-3 left-3 text-gray-400" size={18} />}
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
      />
    </div>
  );
};

export default Input;

// src/components/common/Dropdown.jsx
import React from 'react';

const Dropdown = ({ value, onChange, options }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full pl-3 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
    >
      <option value="">Select Duration</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;

// src/components/details/DetailPanel.jsx
import React from 'react';
import { X } from 'lucide-react';

const DetailPanel = ({ item, onClose }) => {
  return (
    <div className="p-6 h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold capitalize">{item.type} Details</h2>
        <button onClick={onClose}>
          <X size={24} />
        </button>
      </div>

      <div className="space-y-3 text-gray-700">
        {Object.entries(item).map(([key, value]) => {
          if (key === 'type') return null;
          return (
            <div key={key}>
              <span className="font-medium capitalize">{key}: </span>
              <span>{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailPanel;

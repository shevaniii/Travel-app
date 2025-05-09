// src/components/dashboard/ActivityCard.jsx
import React from 'react';

const ActivityCard = ({ activity, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border border-gray-300 rounded-xl p-4 bg-white shadow hover:shadow-md cursor-pointer transition"
    >
      <h4 className="font-semibold text-gray-800 text-sm">{activity.name}</h4>
      <p className="text-gray-500 text-sm mt-1">
        Timing: {activity.time} <br />
        Duration: {activity.duration} <br />
        Pick up: {activity.pickup}
      </p>
    </div>
  );
};

export default ActivityCard;

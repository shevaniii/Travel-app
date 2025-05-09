// src/components/dashboard/TripCard.jsx
import React from 'react';
import { MapPin } from 'lucide-react';

const TripCard = ({ trip }) => {
  const { destination, date, image } = trip;

  return (
    <div
      className="relative h-[180px] rounded-2xl overflow-hidden shadow-lg bg-gray-100"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />

      {/* Text content */}
      <div className="absolute z-20 bottom-4 left-4">
        <p className="text-white text-xs flex items-center">
          <MapPin size={14} className="mr-1" />
          {destination}
        </p>
        <p className="text-white font-semibold text-lg tracking-wide">{date}</p>
      </div>
    </div>
  );
};

export default TripCard;

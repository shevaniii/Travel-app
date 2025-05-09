// src/components/dashboard/HotelCard.jsx
import React from 'react';

const HotelCard = ({ hotel, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="rounded-xl border border-gray-200 overflow-hidden shadow-sm cursor-pointer hover:shadow-lg transition"
    >
      <img src={hotel.image} alt={hotel.name} className="w-full h-40 object-cover" />

      <div className="p-4 space-y-1">
        <h4 className="text-gray-900 font-medium text-sm">{hotel.name}</h4>
        <p className="text-gray-500 text-sm">{hotel.location}</p>
        <p className="text-xs text-gray-500">
          Check in: {hotel.checkIn} • Check out: {hotel.checkOut}
        </p>

        <div className="flex justify-between items-center text-sm mt-2">
          <span className="text-gray-700">{hotel.nights} Nights</span>
          <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-lg">
            Confirmed
          </span>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;

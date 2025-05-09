// src/components/dashboard/FlightCard.jsx
import React from 'react';
import { Plane } from 'lucide-react';

const FlightCard = ({ flight, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="rounded-xl bg-[#3643FB] text-white p-4 space-y-2 cursor-pointer shadow-md hover:opacity-90 transition"
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">Flight Details</h3>
        <button className="text-sm underline">See all</button>
      </div>

      <p className="text-sm text-white/80">{flight.date}, {flight.time || "10:50 am"}</p>

      <div className="flex items-center gap-2 text-lg font-semibold">
        <span>{flight.from}</span>
        <Plane className="w-5 h-5" />
        <span>{flight.to}</span>
      </div>

      <p className="text-sm text-white/70">{flight.fromCity}, {flight.toCity}</p>
    </div>
  );
};

export default FlightCard;

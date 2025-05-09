// src/components/dashboard/DashboardPanel.jsx
import React from 'react';
import Navigation from '../layout/Navigation';
import TripCard from './TripCard';
import FlightCard from './FlightCard';
import HotelCard from './HotelCard';
import ActivityCard from './ActivityCard';
import ThemeToggle from '../layout/ThemeToggle';

const DashboardPanel = ({ tripData, onItemClick }) => {
  if (!tripData) return null;

  const { destination, date, image, flight, hotel, activities } = tripData;

  return (
    <div className="pb-24 px-4 pt-6 space-y-6 relative min-h-screen bg-white dark:bg-gray-900 transition-colors">

      {/* Greeting and Theme Toggle */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Hello Chhavi!</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">Ready for the trip?</p>
        </div>
        <ThemeToggle />
      </div>

      {/* Trip */}
      <TripCard trip={{ destination, date, image }} />

      {/* Flight */}
      <FlightCard flight={flight} onClick={() => onItemClick(flight, 'flight')} />

      {/* Hotel */}
      <HotelCard hotel={hotel} onClick={() => onItemClick(hotel, 'hotel')} />

      {/* Activities */}
      <div className="space-y-4">
        {activities.map((activity, i) => (
          <ActivityCard
            key={i}
            activity={activity}
            onClick={() => onItemClick(activity, 'activity')}
          />
        ))}
      </div>

      {/* Bottom Navigation (fixed) */}
      <Navigation />
    </div>
  );
};

export default DashboardPanel;

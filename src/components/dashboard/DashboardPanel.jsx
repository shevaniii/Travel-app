// src/components/dashboard/DashboardPanel.jsx
import React from 'react';
import Navigation from '../layout/Navigation';
import TripCard from './TripCard';
import FlightCard from './FlightCard';
import HotelCard from './HotelCard';
import ActivityCard from './ActivityCard';

const DashboardPanel = ({ tripData, onItemClick }) => {
  if (!tripData) return null;

  const { destination, date, image, flight, hotel, activities } = tripData;

  return (
    <div className="space-y-6 p-4">
      <TripCard trip={{ destination, date, image }} />

      <FlightCard flight={flight} onClick={() => onItemClick(flight, 'flight')} />
      <HotelCard hotel={hotel} onClick={() => onItemClick(hotel, 'hotel')} />

      {activities.map((activity, i) => (
        <ActivityCard key={i} activity={activity} onClick={() => onItemClick(activity, 'activity')} />
      ))}
      <Navigation />
    </div>
  );
};

export default DashboardPanel;

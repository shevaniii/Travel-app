// src/components/onboarding/OnboardingPanel.jsx
import React, { useState } from 'react';
import { User, Users, MapPin, Calendar } from 'lucide-react';
import Button from '../common/Button';

const OnboardingPanel = ({ onContinue }) => {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [travelCompanion, setTravelCompanion] = useState('');

  const durations = [
    { label: 'Weekend getaway (2-3 days)', value: 'weekend' },
    { label: 'One week', value: 'week' },
    { label: 'Two weeks', value: 'twoWeeks' },
    { label: 'One month', value: 'month' },
  ];

  const handleSubmit = () => {
    if (destination && duration && travelCompanion) {
      onContinue();
    } else {
      alert('Please fill out all fields');
    }
  };

  const travelOptions = [
    { label: 'Solo', icon: <User size={16} />, value: 'solo' },
    { label: 'Couple', icon: <Users size={16} />, value: 'couple' },
    { label: 'Family', icon: <Users size={16} />, value: 'family' },
    { label: 'Friends', icon: <Users size={16} />, value: 'friends' },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 transition-colors px-6">
      <div className="w-full max-w-md space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          Plan Your Journey, Your Way!
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Let’s create your personalised travel experience
        </p>

        {/* Destination input */}
        <div className="relative">
          <MapPin className="absolute top-3.5 left-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Enter Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />
        </div>

        {/* Duration Dropdown */}
        <div className="relative">
          <Calendar className="absolute top-3.5 left-3 text-gray-400" size={18} />
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600"
          >
            <option value="">Select Duration</option>
            {durations.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Travel Companion Buttons */}
        <div className="grid grid-cols-2 gap-4">
          {travelOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setTravelCompanion(opt.value)}
              className={`flex items-center justify-center gap-2 p-3 rounded-lg border transition ${
                travelCompanion === opt.value
                  ? 'bg-blue-100 border-blue-500 text-blue-700 dark:bg-blue-700 dark:text-white'
                  : 'border-gray-300 text-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600'
              }`}
            >
              {opt.icon}
              {opt.label}
            </button>
          ))}
        </div>

        <Button text="Continue" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default OnboardingPanel;

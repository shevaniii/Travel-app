// src/App.jsx
import React, { useState } from 'react';
import OnboardingPanel from './components/onboarding/OnBoardinPanel';
import DashboardPanel from './components/dashboard/DashboardPanel';
import DetailPanel from './components/details/DetailPanel';
import ThemeToggle from './components/layout/ThemeToggle';

function App() {
  const [activePanel, setActivePanel] = useState('onboarding');
  const [showThirdPane, setShowThirdPane] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const mockTripData = {
    destination: 'Tokyo',
    date: 'JUL 15-20, 2025',
    image:'/tokyo.png',
    flight: {
      from: 'DEL',
      to: 'NRT',
      date: 'JUL 15, 2025',
      time: '10:50 am',
      airline: 'Japan Airlines',
      fromCity: 'Delhi, India',
      toCity: 'Narita, Tokyo',
      type: 'flight'
    },
    hotel: {
      name: 'Shibuya Prince Hotel',
      location: 'Central Tokyo',
      rating: 4.8,
      checkIn: 'JUL 15, 2025',
      checkOut: 'JUL 20, 2025',
      price: 945,
      nights: 5,
      type: 'hotel',
      image: 'https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=600&q=80'
    },
    activities: [
      {
        name: 'Tokyo Tower Visit',
        date: 'JUL 15, 2025',
        time: '10:00 AM',
        duration: '2 hours',
        pickup: 'From Hotel',
        type: 'activity'
      }
    ]
  };
  

  const handleContinue = () => {
    setActivePanel('dashboard');
  };

  const handleItemClick = (item, type) => {
    setSelectedItem({ ...item, type });
    setShowThirdPane(true);
  };

  const closeThirdPane = () => {
    setShowThirdPane(false);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {activePanel === 'onboarding' && (
        <OnboardingPanel onContinue={handleContinue} />
      )}

      {activePanel === 'dashboard' && (
        <div className="flex flex-col md:flex-row h-screen overflow-hidden">
          <div className={`${showThirdPane ? 'w-full md:w-1/2' : 'w-full'} overflow-y-auto`}>
            <DashboardPanel tripData={mockTripData} onItemClick={handleItemClick} />
          </div>

          {showThirdPane && selectedItem && (
            <div className="w-full md:w-1/2 border-l border-gray-200 bg-white overflow-y-auto">
              <DetailPanel item={selectedItem} onClose={closeThirdPane} />
            </div>
          )}
        </div>
      )}
<ThemeToggle />
    </div>
  );
}

export default App;

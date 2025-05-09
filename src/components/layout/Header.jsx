// src/components/layout/Header.jsx (optional)

import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-3 py-1 border rounded-lg text-sm text-gray-700 dark:text-white"
    >
      {dark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;

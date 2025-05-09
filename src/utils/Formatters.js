// src/utils/formatters.js

export const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };
  
  export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  
  export const getDaysBetween = (startDate, endDate) => {
    const diff = new Date(endDate) - new Date(startDate);
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };
  
import React from 'react';

export const CacheTest = () => {
  const timestamp = new Date().toLocaleTimeString();

  return (
    <div className="fixed top-0 left-0 z-[9999] p-4 bg-yellow-400 border-4 border-red-600 font-bold text-black">
      <p>TEST LOADED AT: {timestamp}</p>
      <p>If you don't see the current time, your cache is still stuck!</p>
    </div>
  );
};
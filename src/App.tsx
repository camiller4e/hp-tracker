import React, { useState } from 'react';
import { Plus, Minus, Volume2 } from 'lucide-react';

const MTGHPTracker = () => {
  const [hp, setHP] = useState(20);
  const [selectedVoice, setSelectedVoice] = useState('default');

  // Voice options for the dropdown
  const voiceOptions = [
    { value: 'default', label: 'Default' },
    { value: 'warrior', label: 'Warrior' },
    { value: 'mage', label: 'Mage' },
    { value: 'beast', label: 'Beast' },
    { value: 'ethereal', label: 'Ethereal' }
  ];

  const increaseHP = () => {
    setHP(prev => prev + 1);
    // replace console.log with "life" sound
    console.log(`Playing heal sound for ${selectedVoice} voice`);
  };

  const decreaseHP = () => {
    setHP(prev => Math.max(0, prev - 1)); // Prevent negative HP
    // replace console.log with "dsmage" sound
    console.log(`Playing damage sound for ${selectedVoice} voice`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-8 shadow-2xl">
        <div className="flex items-center justify-center gap-8">
          {/* Voice Selector */}
          <div className="flex flex-col items-center gap-2">
            <Volume2 className="text-purple-300 w-6 h-6" />
            <select
              value={selectedVoice}
              onChange={(e) => setSelectedVoice(e.target.value)}
              className="bg-gray-800/80 border border-purple-500/50 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {voiceOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* HP Tracker */}
          <div className="flex flex-col items-center gap-4">
            {/* Increase Button */}
            <button
              onClick={increaseHP}
              className="w-16 h-16 bg-green-600 hover:bg-green-500 active:bg-green-700 rounded-full flex items-center justify-center transition-all duration-150 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              <Plus className="text-white w-8 h-8" />
            </button>

            {/* HP Display */}
            <div className="bg-gray-900/80 border-2 border-purple-400 rounded-xl px-8 py-6 min-w-[120px] flex items-center justify-center">
              <span className="text-6xl font-bold text-white font-mono">
                {hp}
              </span>
            </div>

            {/* Decrease Button */}
            <button
              onClick={decreaseHP}
              className="w-16 h-16 bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-full flex items-center justify-center transition-all duration-150 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              <Minus className="text-white w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Game Info */}
        <div className="mt-6 text-center">
          <p className="text-purple-200 text-sm">
            Voice: <span className="text-white font-semibold">{voiceOptions.find(v => v.value === selectedVoice)?.label}</span>
          </p>
          <p className="text-purple-300/70 text-xs mt-1">
            Magic the Gathering HP Tracker
          </p>
        </div>
      </div>
    </div>
  );
};

export default MTGHPTracker;
import React, { useState } from 'react';

const RecurrenceOptions = ({ pattern, settings, onChange }) => {
  const [localPattern, setLocalPattern] = useState(pattern);
  const [localSettings, setLocalSettings] = useState(settings);

  const handlePatternChange = (event) => {
    const newPattern = event.target.value;
    setLocalPattern(newPattern);
    onChange(newPattern, localSettings);
  };

  const handleSettingsChange = (newSettings) => {
    setLocalSettings(newSettings);
    onChange(localPattern, newSettings);
  };

  return (
    <div className="recurrence-options">
      <label>Recurrence Pattern:</label>
      <select value={localPattern} onChange={handlePatternChange}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      {/* Add more controls here based on the selected pattern */}
      {/* Example: */}
      <label>Every X {localPattern}:</label>
      <input 
        type="number" 
        value={localSettings.interval || 1} 
        onChange={(e) => handleSettingsChange({ ...localSettings, interval: e.target.value })} 
      />
    </div>
  );
};

export default RecurrenceOptions;

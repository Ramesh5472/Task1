import React, { useState } from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import DatePicker from './DatePicker';
import PreviewCalendar from './PreviewCalendar';

const RecurringDatePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [recurrencePattern, setRecurrencePattern] = useState('daily');
  const [recurrenceSettings, setRecurrenceSettings] = useState({});

  const handleRecurrenceChange = (pattern, settings) => {
    setRecurrencePattern(pattern);
    setRecurrenceSettings(settings);
  };

  return (
    <div className="recurring-date-picker">
      <DatePicker 
        startDate={startDate} 
        endDate={endDate} 
        onDateChange={(start, end) => {
          setStartDate(start);
          setEndDate(end);
        }} 
      />
      <RecurrenceOptions 
        pattern={recurrencePattern} 
        settings={recurrenceSettings} 
        onChange={handleRecurrenceChange} 
      />
      <PreviewCalendar 
        startDate={startDate} 
        endDate={endDate} 
        pattern={recurrencePattern} 
        settings={recurrenceSettings} 
      />
    </div>
  );
};

export default RecurringDatePicker;

import React from 'react';
import { DateRangePicker } from 'react-date-range'; // You might need to install this or use your custom component

const DatePicker = ({ startDate, endDate, onDateChange }) => {
  return (
    <div className="date-picker">
      <DateRangePicker
        ranges={[{
          startDate: startDate || new Date(),
          endDate: endDate || new Date(),
          key: 'selection'
        }]}
        onChange={item => onDateChange(item.selection.startDate, item.selection.endDate)}
      />
    </div>
  );
};

export default DatePicker;

import React, { useState } from 'react';
import arrowDownIcon from '../../assets/arrow-down.svg';
import arrowUpIcon from '../../assets/arrow-up.svg';
import greenCircleIcon from '../../assets/green-circle.svg';
import pointerIcon from '../../assets/pointer.svg';
import redCircleIcon from '../../assets/red-circle.svg';
import yellowCircleIcon from '../../assets/yellow-circle.svg';
import grayCircleIcon from '../../assets/gray-circle.svg';
import { ChargeBox } from '../../utils/types';

type BoxItemProps = {
  box: ChargeBox;
};

const BoxItem: React.FC<BoxItemProps> = ({ box }) => {
  console.log(box); // Log the box object for debugging purposes

  // State to manage the expanded state of the box item
  const [expanded, setExpanded] = useState(false);

  // Destructure properties from the box object
  const {
    name,
    type,
    address,
    distance,
    status, // Renamed from 'availability' to 'status'
  } = box;

  console.log('Status:', status); // Log the status prop to check if it's correctly received

  // Function to toggle the expanded state of the box item
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // Function to render the availability icon and text based on the status
  const getAvailabilityIcon = () => {
    switch (status) {
      case 'free':
        return (
          <div className="flex items-center">
            <img src={greenCircleIcon} alt="Green Circle" className="w-5 h-5 mr-2" />
            <span>Available</span>
          </div>
        );
      case 'in_use':
        return (
          <div className="flex items-center">
            <img src={redCircleIcon} alt="Red Circle" className="w-5 h-5 mr-2" />
            <span>In Use</span>
          </div>
        );
      case 'booked':
        return (
          <div className="flex items-center">
            <img src={yellowCircleIcon} alt="Yellow Circle" className="w-5 h-5 mr-2" />
            <span>Booked</span>
          </div>
        );
      case 'offline':
        return (
          <div className="flex items-center">
            <img src={grayCircleIcon} alt="Gray Circle" className="w-5 h-5 mr-2" />
            <span>Offline</span>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="flex flex-col border-b">
      <div className="flex justify-between items-center py-2 px-4">
        {/* Left section containing the box details */}
        <div className="flex items-center">
          <input type="checkbox" className="mr-4" />
          <span className="mr-4 font-semibold">{name}</span>
          <img src={pointerIcon} alt="Pointer Icon" className="w-5 h-5 mr-4" />
          <span className="mr-4">{distance} km</span>
        </div>
        {/* Right section containing the availability status and arrow icon */}
        <div className="flex items-center">
          {getAvailabilityIcon()}
        </div>
        {/* Arrow icon for expanding/collapsing the box item */}
        <img
          src={expanded ? arrowUpIcon : arrowDownIcon}
          alt={expanded ? 'Arrow Up' : 'Arrow Down'}
          className="w-5 h-5 cursor-pointer"
          onClick={toggleExpand}
        />
      </div>
      {/* Additional details displayed when the box item is expanded */}
      {expanded && (
        <div className="px-4 pb-4">
          <p className="mb-2">
            <span className="font-semibold">Type:</span> {type}
          </p>
          <p className="mb-4">
            <span className="font-semibold">Address:</span> {address}
          </p>
          {/* Buttons for navigation and booking */}
          <div className="flex justify-between">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Navigate on GMaps</button>
            <button className="px-4 py-2 bg-green-500 text-white rounded">Book Charging Session Now</button>
          </div>
        </div>
      )}
    </div>
  );
};
  
export default BoxItem;

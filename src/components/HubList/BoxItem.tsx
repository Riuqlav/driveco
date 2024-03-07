import React, { useState } from 'react';
import arrowDownIcon from '../../assets/down.png';
import arrowUpIcon from '../../assets/up.png';
import greenCircleIcon from '../../assets/green.png';
import pointerIcon from '../../assets/pointer.png';
import redCircleIcon from '../../assets/red.png';
import yellowCircleIcon from '../../assets/yellow.png';
import grayCircleIcon from '../../assets/gray.png';
import { ChargeBox, GeoLocation } from '../../utils/types';
import { calculateDistance } from '../../utils/distanceCalculator';

type BoxItemProps = {
  box: ChargeBox;
  userLocation: GeoLocation | null;
};

const BoxItem: React.FC<BoxItemProps> = ({ box, userLocation }) => {
  const [expanded, setExpanded] = useState(false);
  const { name, type, address, status, location } = box;

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

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

  const formattedDistance = calculateDistance(userLocation, location);

  return (
    <div className="flex flex-col border-b">
      <div className="flex py-2 px-4">
        <div className="flex items-center w-1/3">
          <input type="checkbox" className="mr-4" />
          <span className="mr-4 font-semibold">{name}</span>
        </div>
        <div className="flex items-center justify-start w-1/3">
          <img src={pointerIcon} alt="Pointer Icon" className="w-5 h-5 mr-4" />
          <span className="mr-4">{formattedDistance}</span>
        </div>
        <div className="flex items-center justify-start w-1/3">
        {getAvailabilityIcon()}
        </div>
        <img
          src={expanded ? arrowUpIcon : arrowDownIcon}
          alt={expanded ? 'Arrow Up' : 'Arrow Down'}
          className="w-5 h-5 cursor-pointer"
          onClick={toggleExpand}
        />
      </div>
      {expanded && (
        <div className="px-4 pb-4">
          <p className="mb-2">
            <span className="font-semibold">Type:</span> {type}
          </p>
          <p className="mb-4">
            <span className="font-semibold">Address:</span> {address}
          </p>
          <div className="flex justify-between">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Navigate on GMaps
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded">
              Book Charging Session Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoxItem;
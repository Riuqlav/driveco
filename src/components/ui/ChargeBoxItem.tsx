// ChargeBoxItem.jsx
import React, { useState } from 'react';
import { ChargeBox, Parameters } from '../types/types';
import ChargeBoxStatus from './ChargeBoxStatus';
import ChargeBoxItemDetails from './ChargeBoxItemDetails';

interface ChargeBoxItemProps {
  chargeBox: ChargeBox;
  parameters: Parameters | null;
  onDetailsClick: (chargeBox: ChargeBox) => void;
  onLocationClick: (chargeBox: ChargeBox) => void;
}

const ChargeBoxItem: React.FC<ChargeBoxItemProps> = ({
  chargeBox,
  parameters,
  onDetailsClick,
  onLocationClick,
}) => {
  const { name, location, status, type, address } = chargeBox;
  const distance = calculateDistance(location.latitude, location.longitude);

  const getIconUrl = () => {
    const formattedType = type.toLowerCase().replace(/\s+/g, '_');
    if (parameters && parameters.chargebox_type && parameters.chargebox_type[formattedType]) {
      return parameters.chargebox_type[formattedType].icon;
    } else {
      // Default icon URL if the specific type is not found
      return 'src/assets/Driveco_logo.png';
    }
  };

  console.log('WHOLE THING:', parameters, chargeBox);
  const iconUrl = getIconUrl();

  const [expanded, setExpanded] = useState(false);

  const toggleDetails = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="border-b border-gray-200 relative">
      <div className={`p-4 ${expanded ? 'pb-0' : ''} flex items-center justify-between`}>
        <div className="w-1/3 flex items-center">
          {/* Type icons */}
          {iconUrl && <img src={iconUrl} alt={type} className="w-8 h-8 mr-4" />}
          {/* Names */}
          <div>
            <h3 className="font-semibold">{name}</h3>
          </div>
        </div>
        <div className="w-1/3 flex items-center">
          {/* Distance button */}
          <button className="flex items-center">
            <img src="src/assets/pointer.png" alt="Pointer" className="w-4 h-4 mr-2" />
            <span>{distance} km</span>
          </button>
        </div>
        <div className="w-1/3 flex items-center">
          {/* Status icon */}
          <div className="mr-4">
            <ChargeBoxStatus status={status} />
          </div>
          {/* Availabilities */}
          <div>
            <p>availability</p>
          </div>
        </div>
        <div className="w-1/12 flex items-center justify-end">
          {/* Arrow icon */}
          <div onClick={toggleDetails}>
            <img
              src={expanded ? 'src/assets/up.png' : 'src/assets/down.png'}
              alt={expanded ? 'Collapse' : 'Expand'}
              className="w-4 h-4 mr-2 cursor-pointer"
            />
          </div>
        </div>
      </div>
      {expanded && (
        <div className="p-4 pt-0">
          <ChargeBoxItemDetails type={type} address={address} />
        </div>
      )}
    </div>
  );
};

function calculateDistance(latitude: number, longitude: number): number {
  // Implement distance calculation based on user's location
  return 0; // Replace with actual distance calculation
}

export default ChargeBoxItem;
import React, { useState } from 'react';
import { ChargeBox, Parameters } from '../types/types';
import ChargeBoxStatus from './ChargeBoxStatus';
import ChargeBoxItemDetails from './ChargeBoxItemDetails';
import { calculateDistance } from '../utils/distanceCalculator';
import LocationModal from './LocationModal';

interface ChargeBoxItemProps {
  chargeBox: ChargeBox;
  parameters: Parameters | null;
  onDetailsClick: (chargeBox: ChargeBox) => void;
  onLocationClick: (chargeBox: ChargeBox) => void;
  userLocation: { latitude: number; longitude: number };
  language: 'fr' | 'en';
}

const ChargeBoxItem: React.FC<ChargeBoxItemProps> = ({
  chargeBox,
  parameters,
  onDetailsClick,
  onLocationClick,
  userLocation,
  language,
}) => {
  const { name, location, status, type, address } = chargeBox;
  const distance = calculateDistance(
    userLocation.latitude,
    userLocation.longitude,
    location.latitude,
    location.longitude
  );

  // Retrieves the icon URL for the charge box type, or defaults to a generic icon.
  const getIconUrl = () => (
    parameters && parameters.chargebox_type && parameters.chargebox_type[type.toLowerCase().replace(/\s+/g, '_')]
      ? parameters.chargebox_type[type.toLowerCase().replace(/\s+/g, '_')].icon
      : 'src/assets/Driveco_logo.png'
  );

  const iconUrl = getIconUrl();
  const [expanded, setExpanded] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);

  const toggleDetails = () => setExpanded(!expanded);
  const handleLocationClick = () => setShowLocationModal(true);
  const handleCloseLocationModal = () => setShowLocationModal(false);

  return (
    <div className="border-b border-gray-200 relative">
      <div className={`p-4 ${expanded ? 'pb-0' : ''} flex items-center justify-between`}>
        <div className="w-1/3 flex items-center">
          {iconUrl && <img src={iconUrl} alt={type} className="w-8 h-8 mr-4" />}
          <div>
            <h3 className="font-semibold">{name}</h3>
          </div>
        </div>
        <div className="w-1/3 flex items-center">
          <button className="flex items-center" onClick={handleLocationClick}>
            <img src="src/assets/pointer.png" alt="Pointer" className="w-4 h-4 mr-2" />
            <span>{distance.toFixed(2)} km</span>
          </button>
        </div>
        <div className="w-1/3 flex items-center">
          <div className="mr-4">
          <ChargeBoxStatus
            status={chargeBox.status}
            language={language}
            parameters={parameters} // Pass the parameters prop to ChargeBoxStatus
          />
          </div>
        </div>
        <div className="w-1/12 flex items-center justify-end" onClick={toggleDetails}>
          <img
            src={expanded ? 'src/assets/up.png' : 'src/assets/down.png'}
            alt={expanded ? 'Collapse' : 'Expand'}
            className="w-4 h-4 mr-2 cursor-pointer"
          />
        </div>
      </div>
      {expanded && (
        <div className="p-4 pt-0">
   <ChargeBoxItemDetails
          type={chargeBox.type}
          address={chargeBox.address}
          location={chargeBox.location}
          language={language}
          parameters={parameters} // Pass the parameters prop
        />
          </div>
      )}
      <LocationModal
        userLocation={userLocation}
        chargeBoxLocation={location}
        isOpen={showLocationModal}
        onClose={handleCloseLocationModal}
      />
    </div>
  );
};

export default ChargeBoxItem;

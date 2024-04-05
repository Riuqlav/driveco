import React from 'react';
import { Parameters } from '../types/types';
import PointerBoxIcon from '../../assets/pointerBox.png';
import KeyIcon from '../../assets/key.png';

interface ChargeBoxItemDetailsProps {
  type: string;
  address: string;
  location: {
    latitude: number;
    longitude: number;
  } | null;
  language: 'fr' | 'en';
  parameters: Parameters | null;
}

const ChargeBoxItemDetails: React.FC<ChargeBoxItemDetailsProps> = ({
  type,
  address,
  location,
  language,
  parameters,
}) => {
  const handleNavigateToGmaps = () => {
    let gmapsUrl;

    if (location) {
      const { latitude, longitude } = location;
      gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    } else {
      gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    }

    window.open(gmapsUrl, '_blank');
  };

  const handleBookChargingSession = () => {
    window.open('https://driveco.com/', '_blank');
  };

  const navigateToGmapsText = parameters?.translations[language]['cta.navigate_gmap'];
  const bookChargingSessionText = parameters?.translations[language]['cta.booking'];

  return (
    <div className="flex flex-col">
      <p>
        <strong>Type:</strong> {type}
      </p>
      <p>
        <strong>Address:</strong> {address}
      </p>
      <div className="mt-2 flex justify-between">
        <button
          className="flex items-center mr-2 bg-blue-200 hover:bg-blue-300 text-black py-2 px-4 rounded border border-black"
          onClick={handleNavigateToGmaps}
        >
          <img src={PointerBoxIcon} alt="Pointer" className="mr-2 h-4 w-4" />
          {navigateToGmapsText}
        </button>
        <button
          className="flex items-center bg-green-200 hover:bg-green-300 text-black py-2 px-4 rounded border border-black"
          onClick={handleBookChargingSession}
        >
          <img src={KeyIcon} alt="Key" className="mr-2 h-4 w-4" />
          {bookChargingSessionText}
        </button>
      </div>
    </div>
  );
};

export default ChargeBoxItemDetails;

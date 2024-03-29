import React from 'react';

interface ChargeBoxItemDetailsProps {
  type: string;
  address: string;
  location: {
    latitude: number;
    longitude: number;
  } | null;
}

const ChargeBoxItemDetails: React.FC<ChargeBoxItemDetailsProps> = ({ type, address, location }) => {
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
          <img src="src/assets/pointerBox.png" alt="Pointer" className="mr-2 h-4 w-4" />
          Navigate to Gmaps
        </button>
        <button
          className="flex items-center bg-green-200 hover:bg-green-300 text-black py-2 px-4 rounded border border-black"
          onClick={handleBookChargingSession}
        >
          <img src="src/assets/key.png" alt="Key" className="mr-2 h-4 w-4" />
          Book a Charging Session
        </button>
      </div>
    </div>
  );
};

export default ChargeBoxItemDetails;
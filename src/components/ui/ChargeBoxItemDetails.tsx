// ChargeBoxItemDetails.jsx
import React from 'react';

interface ChargeBoxItemDetailsProps {
  type: string;
  address: string;
}

const ChargeBoxItemDetails: React.FC<ChargeBoxItemDetailsProps> = ({ type, address }) => {
  return (
    <div className="flex flex-col">
      <p>
        <strong>Type:</strong> {type}
      </p>
      <p>
        <strong>Address:</strong> {address}
      </p>
      <div className="mt-2 flex">
        <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Navigate to Gmaps
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Book a Charging Session
        </button>
      </div>
    </div>
  );
};

export default ChargeBoxItemDetails;
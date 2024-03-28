import React, { useState, useEffect } from 'react';
import { ChargeBox, Parameters } from '../types/types';
import { getChargeBoxes, getParameters } from '../services/api';
import ChargeBoxItem from './ChargeBoxItem';

interface ChargeBoxListProps {
  userLocation: { latitude: number; longitude: number };
}

const ChargeBoxList: React.FC<ChargeBoxListProps> = ({ userLocation }) => {
  const [chargeBoxes, setChargeBoxes] = useState<ChargeBox[]>([]);
  const [parameters, setParameters] = useState<Parameters | null>(null);
  const [visibleChargeBoxes, setVisibleChargeBoxes] = useState<ChargeBox[]>([]);
  const [currentIndex, setCurrentIndex] = useState(5);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setVisibleChargeBoxes(chargeBoxes.slice(0, currentIndex));
  }, [chargeBoxes, currentIndex]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const [chargeBoxesData, parametersData] = await Promise.all([
        getChargeBoxes(),
        getParameters(),
      ]);
      setChargeBoxes(chargeBoxesData);
      setParameters(parametersData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDetailsClick = (chargeBox: ChargeBox) => {
    // Open details for the clicked charge box
    console.log('Details clicked for:', chargeBox);
  };

  const handleLocationClick = (chargeBox: ChargeBox) => {
    // Open modal with leaflet map and charge box location
    console.log('Location clicked for:', chargeBox);
  };

  const handleLoadMore = () => {
    setCurrentIndex(currentIndex + 5);
  };

  if (isLoading) {
    return <div className='animate-pulse'>Loading location...</div>;
  }

  return (
    <div>
      {visibleChargeBoxes.map((chargeBox) => (
        <ChargeBoxItem
          key={chargeBox.identifier}
          chargeBox={chargeBox}
          parameters={parameters}
          onDetailsClick={handleDetailsClick}
          onLocationClick={handleLocationClick}
          userLocation={userLocation}
        />
      ))}
      {currentIndex < chargeBoxes.length && (
        <div className="flex justify-center my-4">
          <img
            src="src/assets/down.png"
            alt="Load More"
            className="w-6 h-6 cursor-pointer"
            onClick={handleLoadMore}
          />
        </div>
      )}
    </div>
  );
};

export default ChargeBoxList;
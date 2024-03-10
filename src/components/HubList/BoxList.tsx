import React, { useState, useEffect } from 'react';
import { fetchChargeBoxes } from '../../services/api';
import { ChargeBox, GeoLocation } from '../../utils/types';
import BoxItem from './BoxItem';
import { calculateDistance } from '../../utils/distanceCalculator.tsx';

type BoxListProps = {
  userLocation: GeoLocation | null;
};

const BoxList: React.FC<BoxListProps> = ({ userLocation }) => {
  const [chargeBoxes, setChargeBoxes] = useState<ChargeBox[]>([]);
  const [displayedBoxes, setDisplayedBoxes] = useState<ChargeBox[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const itemsToLoad = 5;

  useEffect(() => {
    fetchChargeBoxes().then(setChargeBoxes);
  }, []);

  // This calculate the distance for each charge box and set the displayed boxes based on the user's location
    useEffect(() => {
    if (userLocation && chargeBoxes.length > 0) {
      setIsLoading(true);
      const boxesWithDistance = chargeBoxes.map(box => ({
        ...box,
        formattedDistance: calculateDistance(userLocation, box.location)
      }));
      setDisplayedBoxes(boxesWithDistance.slice(0, itemsToLoad));
      setIsLoading(false);
    }
  }, [userLocation, chargeBoxes, itemsToLoad]);



  const handleLoadMore = () => {
    const newBoxes = chargeBoxes
      .slice(displayedBoxes.length, displayedBoxes.length + itemsToLoad)
      .map(box => ({
        ...box,
        formattedDistance: calculateDistance(userLocation, box.location)
      }));
    setDisplayedBoxes([...displayedBoxes, ...newBoxes]);
  };

  return (
    <div className="mx-auto p-4 max-w-5xl">
      {isLoading ? (
        <p className="animate-pulse">Calculating distances...</p>
      ) : (
        <div className="flex flex-col items-center">
          <div className="self-start">
            <img src={'./src/assets/Driveco_logo.png'} alt="Driveco Logo" className="h-10" />
          </div>
          {displayedBoxes.map(({ identifier, ...rest }) => (
            <div key={identifier} className="w-full mb-4 p-4 bg-white shadow-md rounded-md">
              <BoxItem box={{ identifier, ...rest }} userLocation={userLocation} />
            </div>
          ))}
          <div className="text-center">
            {displayedBoxes.length < chargeBoxes.length && (
              <img
                src={'./src/assets/down.png'}
                alt="Load More"
                className="w-7 h-5 m-10 cursor-pointer"
                onClick={handleLoadMore}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BoxList;
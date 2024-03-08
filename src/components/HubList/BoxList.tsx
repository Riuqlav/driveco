import React, { useState, useEffect } from 'react';
import { fetchChargeBoxes } from '../../services/api';
import { ChargeBox, GeoLocation } from '../../utils/types';
import BoxItem from './BoxItem';
import { calculateDistance } from '../../utils/DistanceCalculator';


type BoxListProps = {
  userLocation: GeoLocation | null;
};

const BoxList: React.FC<BoxListProps> = ({ userLocation }) => {
  const [chargeBoxes, setChargeBoxes] = useState<ChargeBox[]>([]);
  const [displayedBoxes, setDisplayedBoxes] = useState<ChargeBox[]>([]);
  const [isCalculatingDistances, setIsCalculatingDistances] = useState(true);
  const itemsToLoad = 5; // Number of items to load per click

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchChargeBoxes();
        setChargeBoxes(data);
      } catch (error) {
        console.error('Error fetching charge boxes:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Calculate distance once data is fetched
    if (userLocation && chargeBoxes.length > 0) {
      const calculateDistances = async () => {
        const boxesWithDistance = chargeBoxes.map(async box => ({
          ...box,
          formattedDistance: await calculateDistance(userLocation, box.location)
        }));
        const boxesWithResolvedDistance = await Promise.all(boxesWithDistance);
        setDisplayedBoxes(boxesWithResolvedDistance.slice(0, itemsToLoad));
        setIsCalculatingDistances(false);
      };
      calculateDistances();
    }
  }, [userLocation, chargeBoxes, itemsToLoad]);

  const handleLoadMore = () => {
    const startIndex = displayedBoxes.length;
    const endIndex = startIndex + itemsToLoad;
    const newBoxes = chargeBoxes
      .slice(startIndex, endIndex)
      .map(box => ({
        ...box,
        formattedDistance: calculateDistance(userLocation, box.location)
      }));
    setDisplayedBoxes([...displayedBoxes, ...newBoxes]);
  };

  return (
    <div className=" mx-auto p-4 max-w-5xl">
      {isCalculatingDistances && (
        <p className="animate-pulse">Calculating distances...</p>
      )}
      {!isCalculatingDistances && (
        <div className="flex flex-col items-center">
          {displayedBoxes.map(box => (
            <div key={box.identifier} className="w-full mb-4 p-4 bg-white shadow-md rounded-md">
              <BoxItem box={box} userLocation={userLocation} />
            </div>
          ))}
          {displayedBoxes.length < chargeBoxes.length && (
            <img
              src={'src/assets/down.png'}
              alt={"Load More"}
              className="w-7 h-5 m-10 cursor-pointer"
              onClick={handleLoadMore}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default BoxList;

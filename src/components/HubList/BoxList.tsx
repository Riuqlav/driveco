import React, { useState, useEffect } from 'react';
import { fetchChargeBoxes } from '../../services/api';
import { ChargeBox, GeoLocation } from '../../utils/types';
import BoxItem from './BoxItem';

type BoxListProps = {
  userLocation: GeoLocation | null;
};

const BoxList: React.FC<BoxListProps> = ({ userLocation }) => {
  const [chargeBoxes, setChargeBoxes] = useState<ChargeBox[]>([]);
  const [displayedBoxes, setDisplayedBoxes] = useState<ChargeBox[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const itemsToLoad = 5; // Number of items to load per click

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchChargeBoxes();
        setChargeBoxes(data);
        setDisplayedBoxes(data.slice(0, itemsToLoad));
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching charge boxes:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLoadMore = () => {
    const startIndex = displayedBoxes.length;
    const endIndex = startIndex + itemsToLoad;
    const newBoxes = chargeBoxes.slice(startIndex, endIndex);
    setDisplayedBoxes([...displayedBoxes, ...newBoxes]);
  };

  return (
    <div className="container mx-auto p-4">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="border rounded-md divide-y divide-gray-300">
            {displayedBoxes.map((box) => (
              <BoxItem key={box.identifier} box={box} userLocation={userLocation} />
            ))}
          </div>
          {displayedBoxes.length < chargeBoxes.length && (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default BoxList;
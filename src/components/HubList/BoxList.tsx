import React, { useState, useEffect } from 'react';
import { fetchChargeBoxes } from '../../services/api';
import { ChargeBox, GeoLocation } from '../../utils/types';
import BoxItem from './BoxItem';

type BoxListProps = {
  userLocation: GeoLocation | null;
};

const BoxList: React.FC<BoxListProps> = ({ userLocation }) => {
  const [chargeBoxes, setChargeBoxes] = useState<ChargeBox[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log("monted")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchChargeBoxes();
        setChargeBoxes(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching charge boxes:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLoadMore = async () => {
    // Add logic to load more charge boxes
  };

  return (
    <div className="container mx-auto p-4">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="border rounded-md divide-y divide-gray-300">
            {chargeBoxes.map((box) => (
              <BoxItem key={box.identifier} box={box} userLocation={userLocation} />
            ))}
          </div>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </>
      )}
    </div>
  );
};

export default BoxList;
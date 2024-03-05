// fetches data and populate the list.
import React, { useState, useEffect } from 'react';
import { fetchChargeBoxes } from '../../services/api';
import HubItem from './HubItem';
import { ChargeBox } from '../../utils/types';

const HubList = () => {
  const [chargeBoxes, setChargeBoxes] = useState<ChargeBox[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchChargeBoxes();
        setChargeBoxes(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching charge boxes:', error);
        setIsLoading(false); // Make sure to set isLoading to false in case of error
      }
    };

    fetchData();
  }, []);

  const handleLoadMore = async () => {
    // need to logic to load more charge boxes
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {chargeBoxes.map((box) => (
            <HubItem key={box.identifier} box={box} />
          ))}
          <button onClick={handleLoadMore}>Load More</button>
        </>
      )}
    </div>
  );
};

export default HubList;
// handle single rows, each item
import React from 'react';

const HubItem = ({ box }) => {
  const {
    name,
    type,
    location: { latitude, longitude },
    address,
    status,
  } = box;

  const handleExpand = () => {
    // Implement logic to expand the row and show additional details
  };

  return (
    <div className="hub-item">
      <div className="hub-item-header" onClick={handleExpand}>
        <span>{name}</span>
        <span>{type}</span>
        <span>{status}</span>
      </div>
      {/* Additional details shown when expanded */}
      {/* need to include type, address, and other details here */}
      {/* Example: */}
      {/* <div className="hub-item-details">
        <p>Type: {type}</p>
        <p>Address: {address}</p>
        {/* put the rest of details here later */}
      {/* </div> */}
    </div>
  );
};

export default HubItem;
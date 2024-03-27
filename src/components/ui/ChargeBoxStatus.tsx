import React from 'react';
import { ChargeBox } from '../types/types';

interface ChargeBoxStatusProps {
  status: ChargeBox['status'];
}

const ChargeBoxStatus: React.FC<ChargeBoxStatusProps> = ({ status }) => {
  const getIconPath = () => {
    return status === 'free' ? 'src/assets/green.png' :
           status === 'in_use' ? 'src/assets/red.png' :
           status === 'booked' ? 'src/assets/yellow.png' :
           status === 'offline' ? 'src/assets/gray.png' : '';
  };

  const iconPath = getIconPath();

  return (
    <>
      {iconPath && (
        <img src={iconPath} alt={status} className="w-6 h-6 mr-2" />
      )}
      {/* Display the translated status later */}
    </>
  );
};

export default ChargeBoxStatus;

// src/components/ui/ChargeBoxStatus.tsx
import React from 'react';
import { ChargeBox, Parameters } from '../types/types';

interface ChargeBoxStatusProps {
  status: ChargeBox['status'];
  language: 'fr' | 'en';
  parameters: Parameters | null; // Add this line
}

const ChargeBoxStatus: React.FC<ChargeBoxStatusProps> = ({ status, language, parameters }) => {
   const getIconPath = () => {
    return status === 'free' ? 'src/assets/green.png' :
           status === 'in_use' ? 'src/assets/red.png' :
           status === 'booked' ? 'src/assets/yellow.png' :
           status === 'offline' ? 'src/assets/gray.png' : '';
  };

  const iconPath = getIconPath();
  const availabilityText = parameters?.translations[language][`chargebox.status.${status}`];

  return (
    <div className="flex items-center"> {/* Use flex here to align items in a row */}
      {iconPath && (
        <img src={iconPath} alt={status} className="w-6 h-6 mr-2" />
      )}
      <span className="text-m">{availabilityText}</span> {/* TailwindCSS text size utility */}
    </div>
  );
};

export default ChargeBoxStatus;
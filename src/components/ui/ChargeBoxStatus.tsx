import React from 'react';
import { ChargeBox, Parameters } from '../types/types';
import greenIcon from '../../assets/green.png';
import redIcon from '../../assets/red.png';
import yellowIcon from '../../assets/yellow.png';
import grayIcon from '../../assets/gray.png';

interface ChargeBoxStatusProps {
  status: ChargeBox['status'];
  language: 'fr' | 'en';
  parameters: Parameters | null;
}

const ChargeBoxStatus: React.FC<ChargeBoxStatusProps> = ({ status, language, parameters }) => {
  const getIconPath = () =>
    status === 'free'
      ? greenIcon
      : status === 'in_use'
      ? redIcon
      : status === 'booked'
      ? yellowIcon
      : status === 'offline'
      ? grayIcon
      : '';

  const iconPath = getIconPath();
  const availabilityText = parameters?.translations[language][`chargebox.status.${status}`];

  return (
    <div className="flex items-center">
      {iconPath && <img src={iconPath} alt={status} className="w-6 h-6 mr-2" />}
      <span className="text-m">{availabilityText}</span>
    </div>
  );
};

export default ChargeBoxStatus;
import getDistance from 'geolib/es/getDistance';
import { GeoLocation } from './types';

export const calculateDistance = (
  userLocation: GeoLocation | null,
  chargeBoxLocation: GeoLocation
): string => {
  if (!userLocation) {
    return '0.00 km';
  }

  const distance = getDistance(
    { latitude: userLocation.latitude, longitude: userLocation.longitude },
    { latitude: chargeBoxLocation.latitude, longitude: chargeBoxLocation.longitude }
  );

  return `${(distance / 1000).toFixed(2)} km`;
};
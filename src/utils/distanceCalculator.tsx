import getDistance from 'geolib/es/getDistance';
import { GeoLocation } from './types';

export const calculateDistance = (
  userLocation: GeoLocation | null,
  chargeBoxLocation: GeoLocation
): string => {
  if (!userLocation) {
    return '0.0 km';
  }

  // I calculate the distance between the user location and the charge box location using the geolib library
  const distance = getDistance(
    // Here I pass the user's latitude and longitude as an object
    { latitude: userLocation.latitude, longitude: userLocation.longitude },
    // I pass the charge box's latitude and longitude as an object
    { latitude: chargeBoxLocation.latitude, longitude: chargeBoxLocation.longitude }
  );

  return `${(distance / 1000).toFixed(1)} km`;
};
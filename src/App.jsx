import { useState, useEffect } from 'react';
import BoxList from './components/HubList/BoxList';

const App = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setUserLocation(location);
        console.log('User location:', location);
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  }, []);

  return (
    <div>
      <BoxList userLocation={userLocation} />
    </div>
  );
};

export default App;
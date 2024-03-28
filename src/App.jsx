// App.jsx
import { useState, useEffect } from 'react';
import ChargeBoxList from './components/ui/ChargeBoxList';

const App = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Fetch the user's location and update the state
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  }, []);

  return (
    <div>
      {userLocation ? (
        <ChargeBoxList userLocation={userLocation} />
      ) : (
        <div className='animate-pulse'>Loading location...</div>
      )}
    </div>
  );
};

export default App;
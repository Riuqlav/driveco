        import React, { useState, useEffect } from 'react';
        import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
        import 'leaflet/dist/leaflet.css';
        import L from 'leaflet';

        interface MapModalProps {
        coordinates: { latitude: number; longitude: number };
        isOpen: boolean;
        onClose: () => void;
        name: string;
        userLocation: { latitude: number; longitude: number } | null;
        }

        const MapModal: React.FC<MapModalProps> = ({ coordinates, isOpen, onClose, name, userLocation }) => {
        const [map, setMap] = useState<L.Map | null>(null);

        useEffect(() => {
            if (isOpen && map) {
            map.flyTo([coordinates.latitude, coordinates.longitude], 15);
            }
        }, [isOpen, map, coordinates]);

        const hubIcon = L.icon({
            iconUrl: './src/assets/pointerBox.png', 
            iconSize: [40, 40],
        });
        const userIcon = L.icon({
            iconUrl: './src/assets/pointerUser.png', 
            iconSize: [40, 40],
        });

        return (
            <div className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                &#8203;
                </span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-3 sm:pb-4">
                <MapContainer
                     center={[coordinates.latitude, coordinates.longitude]}
                     zoom={11}
                     style={{ height: '400px', width: '100%' }}
                     whenReady={() => setMap(map)}
                     >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[coordinates.latitude, coordinates.longitude]} icon={hubIcon}>
                        <Popup>{name}</Popup>
                    </Marker>
                    {userLocation && (
                        <Marker position={[userLocation.latitude, userLocation.longitude]} icon={userIcon}>
                        <Popup>You are Here</Popup>
                        </Marker>
                    )}
                    </MapContainer>
                </div>
                </div>
            </div>
            </div>
        );
        };

        export default MapModal;
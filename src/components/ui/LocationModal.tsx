import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import pointerUser from "../../assets/pointerUser.png";
import pointerBox from "../../assets/pointerBox.png";

interface LocationModalProps {
  userLocation: { latitude: number; longitude: number };
  chargeBoxLocation: { latitude: number; longitude: number };
  isOpen: boolean;
  onClose: () => void;
}

const LocationModal: React.FC<LocationModalProps> = ({
  userLocation,
  chargeBoxLocation,
  isOpen,
  onClose,
}) => {
  const { latitude: userLatitude, longitude: userLongitude } = userLocation;
  const { latitude: chargeBoxLatitude, longitude: chargeBoxLongitude } =
    chargeBoxLocation;

  const modalRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    const handleMapClick = (e: L.LeafletMouseEvent) => {
      e.originalEvent.stopPropagation();
    };

    if (mapRef.current) {
      mapRef.current.addEventListener("click", handleMapClick);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.removeEventListener("click", handleMapClick);
      }
    };
  }, []);

  // Create custom icons
  const userIcon = L.icon({
    iconUrl: pointerUser,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

  const chargeBoxIcon = L.icon({
    iconUrl: pointerBox,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

  return isOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white rounded-lg shadow-lg p-4 w-3/4 h-3/4"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <MapContainer
          center={[userLatitude, userLongitude]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
          // @ts-ignore
          whenReady={(map) => (mapRef.current = map)}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[userLatitude, userLongitude]} icon={userIcon}>
            <Popup offset={[0, -12]}>Your Location</Popup>
          </Marker>
          <Marker
            position={[chargeBoxLatitude, chargeBoxLongitude]}
            icon={chargeBoxIcon}
          >
            <Popup offset={[0, -12]}>Box Location</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  ) : null;
};

export default LocationModal;

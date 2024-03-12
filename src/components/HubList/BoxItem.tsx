import React, { useState, useMemo } from 'react';
import { ChargeBox, GeoLocation } from '../../utils/types';
import MapModal from '../../utils/MapModal';
import { calculateDistance } from '../../utils/distanceCalculator.tsx';

type BoxItemProps = {
 box: ChargeBox;
 userLocation: GeoLocation | null;
};

const BoxItem: React.FC<BoxItemProps> = ({ box, userLocation }) => {
 const [expanded, setExpanded] = useState(false);
 const [isModalOpen, setIsModalOpen] = useState(false);

 const { name, type, address, status, location, city, zipcode } = box;

 const toggleExpand = () => setExpanded((prevExpanded) => !prevExpanded);
 const toggleModal = () => setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);

 const statusMap = {
   free: 'Available',
   in_use: 'In Use',
   booked: 'Booked',
   offline: 'Offline',
 };

 const getAvailabilityIcon = useMemo(() => {
   const statusText = statusMap[status] || '';
   return (
     <div className="flex items-center">
       <img
         src={`./src/assets/${
           status === 'free'
             ? 'green.png'
             : status === 'in_use'
             ? 'red.png'
             : status === 'booked'
             ? 'yellow.png'
             : status === 'offline'
             ? 'gray.png'
             : ''
         }`}
         alt={`${statusText} Circle`}
         className="w-5 h-5 mr-2"
       />
       <span>{statusText}</span>
     </div>
   );
 }, [status]);

 const formattedDistance = calculateDistance(userLocation, location);

 return (
   <div className="flex flex-col border-b">
     <div className="flex py-2 px-4">
       <div className="flex items-center w-1/3">
         <input type="checkbox" className="mr-4" />
         <span className="mr-4 font-semibold">{name}</span>
       </div>
       <div className="flex items-center justify-start w-1/3">
         <img
           src="./src/assets/pointer.png"
           alt="Pointer Icon"
           className="w-5 h-5 mr-4 cursor-pointer"
           onClick={toggleModal}
         />
         <span className="mr-4">{formattedDistance}</span>
       </div>
       <div className="flex items-center justify-start w-1/3">{getAvailabilityIcon}</div>
       <img
         src={expanded ? './src/assets/up.png' : './src/assets/down.png'}
         alt={expanded ? 'Arrow Up' : 'Arrow Down'}
         className="w-5 h-5 cursor-pointer"
         onClick={toggleExpand}
       />
     </div>
     {expanded && (
       <div className="px-4 pb-4">
         <p className="mb-2">
           <span className="font-semibold">Type:</span> {type}
         </p>
         <p className="mb-4">
           <span className="font-semibold">Address:</span> {address}, {zipcode} {city}
         </p>
         <div className="flex justify-between">
           <button
             className="flex items-center px-4 py-2 bg-blue-100 text-black rounded border border-black hover:bg-blue-200 transition duration-300 ease-in-out"
             onClick={() => window.open('https://www.google.com/maps', '_blank')}
           >
             <img src="./src/assets/pointerBox.png" alt="Pointer Icon" className="w-5 h-5 mr-2" />
             Navigate on GMaps
           </button>
           <button
             className="flex items-center px-4 py-2 bg-green-100 text-black rounded border border-black hover:bg-green-200 transition duration-300 ease-in-out"
             onClick={() => window.open('https://driveco.com/en/retail/', '_blank')}
           >
             <img src="./src/assets/key.png" alt="Key Icon" className="w-5 h-5 mr-2" />
             Book Charging Session Now
           </button>
         </div>
       </div>
     )}
     {isModalOpen && (
       <MapModal
         coordinates={location}
         isOpen={isModalOpen}
         onClose={toggleModal}
         name={name}
         userLocation={userLocation}
       />
     )}
   </div>
 );
};

export default BoxItem;
// LoadMoreButton.jsx
import React from 'react';

interface LoadMoreButtonProps {
  onClick: () => void;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick }) => {
  return (
    <div className="flex justify-center my-4">
      <img
        src="src/assets/down.png"
        alt="Load More"
        className="w-6 h-6 cursor-pointer"
        onClick={onClick}
      />
    </div>
  );
};

export default LoadMoreButton;
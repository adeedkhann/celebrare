import React from 'react';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';

const PhotoCard = ({ photo, isFavorite, onToggle }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img 
          src={`https://picsum.photos/id/${photo.id}/400/400`} 
          alt={`Photo by ${photo.author}`} 
          className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-4 flex justify-between items-center bg-white">
        <p className="font-semibold text-gray-700 truncate w-40" title={photo.author}>
          {photo.author}
        </p>

        <button 
          onClick={() => onToggle(photo)}
          className="text-2xl hover:scale-110 transition-transform"
        >
          {isFavorite ? 
          
            <HiHeart className="text-red-500" />

          : 
          <HiOutlineHeart className="text-gray-300 hover:text-red-300" />
          }
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;
import React, { useState, useReducer, useMemo, useCallback } from 'react';
import useFetchPhotos from '../hooks/useFetchPhotos';
import { favReducer, initialState } from '../store/favReducer';
import PhotoCard from './PhotoCard';
import Loader from './Loader';
const Gallery = () => {

  const { photos, loading, error } = useFetchPhotos();
  const [favorites, dispatch] = useReducer(favReducer, initialState)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);



  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [photos, searchTerm]);


  const toggleFav = (photo) => {
    dispatch({ type: 'toggleFavourite', payload: photo })
  };

  if (loading) return <div className="text-center mt-10"><Loader/></div>; 
  if (error) return <div className="text-center mt-10 text-red-500">Error: {error}</div>

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by author..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {filteredPhotos.map((photo) => (
    <PhotoCard 
      key={photo.id} 
      photo={photo} 
      isFavorite={favorites.some(fav => fav.id === photo.id)}
      onToggle={toggleFav}
    />
  ))}
</div>
    </div>
  );
};

export default Gallery;
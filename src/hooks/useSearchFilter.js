import React, { useState, useEffect } from 'react';
import useMovies from './useMovies';

function useSearchFilter(initialSearchQuery) {
  const { movies, isLoading: moviesLoading, error: moviesError } = useMovies();
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery); 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredMovies(movies); 
      setIsLoading(false);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);


    const delay = setTimeout(() => {
      const lowerCaseSearchQuery = searchQuery.toLowerCase();
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(lowerCaseSearchQuery)
      );
      setFilteredMovies(filtered);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(delay);
  }, [searchQuery, movies]);

  return { filteredMovies, isLoading, error, setSearchQuery, moviesLoading, moviesError };
}

export default useSearchFilter;

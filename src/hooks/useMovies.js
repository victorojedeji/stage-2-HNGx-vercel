import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function useMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try { 
        const API_KEY = process.env.REACT_APP_API_KEY;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}` 
          }
        };
    
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
    
        if (response.status === 200) {
          const data = await response.json();
          setMovies(data['results'].slice(0, 10));
          setIsLoading(false);
        } else {
          setError(new Error('Error fetching data from TMDB'));
          setIsLoading(false);
        }
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, isLoading, error };
}

export default useMovies;

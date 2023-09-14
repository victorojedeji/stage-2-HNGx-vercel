import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function useMovie(id) {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
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
    
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options);
    
        if (response.status === 200) {
          const data = await response.json();
          setMovie(data);
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
  return { movie, isLoading, error };
}

export default useMovie;

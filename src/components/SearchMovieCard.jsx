import React from "react";
import { useNavigate } from "react-router-dom";

export default function SearchMovieCard({
  movieData,
  setActiveSearchField,
  setInputField,
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    setActiveSearchField(false);
    setInputField("");
    navigate(`/movies/${movieData.id}`);
    navigate(0);
  };
  console.log(movieData.id);
  return (
    <div onClick={handleClick}>
      <div className="h-[300px] w-[200px] relative">
        <div
          className="h-full w-full relative"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieData.poster_path})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
          <div className="absolute inset-0 flex flex-col items-left justify-end p-4">
            <h1 className="text-white font-bold text-xl mb-2">
              {movieData.title}
            </h1>
            <h6 className="text-sm text-gray-300">Released on</h6>
            <p className="text-gray-50 text-sm">{movieData.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

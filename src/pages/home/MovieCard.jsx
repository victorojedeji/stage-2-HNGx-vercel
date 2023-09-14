import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movieData }) {
  return (
    <Link to={`/movies/${movieData.id}`}>
  <div className="h-[370px] w-[250px] relative">
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
        <h1 className="text-white font-bold text-2xl mb-2">{movieData.title}</h1>
        <h6 className="text-sm text-gray-300">Released on</h6>
        <p className="text-gray-50 text-base">{movieData.release_date}</p>
      </div>
    </div>
  </div>
</Link>
  );
}

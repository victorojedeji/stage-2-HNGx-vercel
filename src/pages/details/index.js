import React from "react";
import { useParams } from "react-router-dom";
import useMovie from "../../hooks/useMovie";
import { Ring } from "@uiball/loaders";

function ErrorDisplay({ message }) {
  return (
    <div>
      <div className="text-red-600">{message}</div>
    </div>
  );
}


export default function DetailsPage() {
  const { id } = useParams();
  const { movie, isLoading: movieLoading, error } = useMovie(id);
  if (!movie) return null;

  if (error)
  return (
    <div 
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ErrorDisplay message="Failed to fetch movies. Please try again later." />

    </div>
  );

  if (movieLoading)
  return (
    <div 
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ring speed={1.75} />
    </div>
  );
  
  const featuredImg = movie?.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
    : "../../assets/headerBg.png";

    
  return (
    <div>
      <section
        className="min-h-[600px] w-full px-[30px] lg:px-[50px] xl:px-[95px] relative"
        style={{
          backgroundImage: `url(${featuredImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div 
          className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
        ></div>

        <div className="py-40 w-full md:w-[60%] lg:w-[40%] xl:w-[404px] z-50 relative">
          <h1 className="text-5xl text-white font-bold font-DMsans mb-4">
            {movie?.title}
          </h1>

          <p className="font-medium text-white text-sm mb-8">
            {movie?.overview}
          </p>

          <div className="w-full flex items-center gap-10">
            <div>
              <h1 className="text-gray-200">Runtime</h1>
              <p className="text-white">{movie.runtime} minutes</p>
            </div>

            <div>
              <h1 className="text-gray-200">Release Date</h1>
              <p className="text-white">{movie.release_date}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

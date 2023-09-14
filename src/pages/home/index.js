import React from "react";
import MovieCard from "./MovieCard";
import useMovies from "../../hooks/useMovies";
import { Link } from "react-router-dom";
import { Ring } from "@uiball/loaders";

function ErrorDisplay({ message }) {
  return (
    <div>
      <div className="text-red-600">{message}</div>
    </div>
  );
}

export default function Home() {
  const { movies, isLoading: moviesLoading, error } = useMovies();

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

    if (moviesLoading)
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

  const featuredImg =
    movies.length > 0 && movies[0].backdrop_path
      ? `https://image.tmdb.org/t/p/original/${movies[0].backdrop_path}`
      : "../../assets/headerBg.png";

  return (
    <div className="w-full">
      <main
        className="min-h-[600px] w-full px-[30px] lg:px-[50px] xl:px-[95px] relative"
        style={{
          backgroundImage: `url(${featuredImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="py-40 w-full md:w-[60%] lg:w-[40%] xl:w-[404px] z-50 relative">
          <h1 className="text-5xl text-white font-bold font-DMsans mb-4">
            {movies[0].title}
          </h1>

          <p className="font-medium text-white text-sm mb-8">
            {movies[0].overview}
          </p>

          <Link to={`/movies/${movies[0].id}`}>
            <button className="text-white bg-red-600 py-2 px-4 rounded-[6px]">
              See Details
            </button>
          </Link>
        </div>
      </main>

      <section className="px-[30px] lg:px-[50px] xl:px-[95px] py-[70px]">
        <div className="w-full">
          <h1 className="text-black font-bold text-2xl md:text-4xl mb-11">
            Featured Movies
          </h1>

          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-20 gap-y-24">
              {movies.map((movieData) => (
                <div key={movieData?.id}>
                  <MovieCard movieData={movieData} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

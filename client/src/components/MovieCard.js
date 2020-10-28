import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ "backgroundImage": "url('/img/card-left.jpg')" }}
        title="Woman holding a mug"
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal mb-4">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {movie.movieName}
          </div>
          <p className="text-gray-700 text-base">{movie.movieStory}</p>
        </div>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={movie.movieImage}
            alt="Nothing to show"
          />
          <div className="text-sm">
            {/* <p className="text-gray-900 leading-none">Jonathan Reinink</p> */}
            <p className="text-gray-600">{movie.movieRuntime}</p>
            <p className="text-gray-600">{movie.movieRatings}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;

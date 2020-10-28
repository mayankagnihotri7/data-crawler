import React, { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import Axios from "axios";
import uuid from "react-uuid";
import Loader from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(false);
  const [movieData, setMovieData] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    Axios.get("http://localhost:4000/movie", {
      crossDomain: true,
    })
      .then(({ data }) => {
        setLoading(false);
        setMovieData(data);
      })
      .catch((_err) => {
        setLoading(false);
        setMovieData("");
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center py-8">
        <Loader type="ThreeDots" color="#00BFFF" height={60} width={60} />
      </div>
    );
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mx-auto">
      <h1 className="py-8 text-center text-3xl text-blue-700 font-bold">
        Search Here
      </h1>
      <div className="text-center">
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-grey-darker mb-4 w-6/12"
          placeholder="Enter your search term here..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      {movieData &&
        movieData
          .filter(
            (movie) =>
              movie.movieName
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              movie.movieRatings
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
          )
          .map((movie) => {
            return <MovieCard movie={movie} key={uuid()} />;
          })}
    </div>
  );
}

export default App;

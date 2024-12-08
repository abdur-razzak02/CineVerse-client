import { useLoaderData } from "react-router-dom";
import Movie from "./Movie";
import { useState } from "react";

const AllMovies = () => {
  const movies = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-5 lg:px-0 lg:w-4/5 mx-auto py-10 lg:pb-20">
      <div className="flex justify-between items-center mb-5 flex-col gap-2 sm:flex-row">
        <h1 className="text-center text-xl text-purple-700">
          All movies ({movies.length})
        </h1>
        <div className="flex">
          <input
            type="text"
            className="bg-slate-700 text-purple-400 p-2 rounded"
            placeholder="Movie name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-purple-700 p-2 rounded ml-2 text-slate-300">
            Search
          </button>
        </div>
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie,) => (
            <Movie key={movie._id} movie={movie}></Movie>
          ))
        ) : (
          <p className="text-lg py-2">
            No movies found for{" "}
            <span className="text-purple-700 font-bold">{searchQuery}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default AllMovies;

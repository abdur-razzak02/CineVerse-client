import { FaStar, FaShareAlt, FaEdit } from "react-icons/fa";
import { MdDelete, MdFavoriteBorder } from "react-icons/md";

import { Link, useLoaderData } from "react-router-dom";

const MovieDetails = () => {
  const movie = useLoaderData();

  const handleUpdate = (id) => {
    console.log(id);
  }
  const { 
    poster, 
    title, 
    genre, 
    duration, 
    releaseYear, 
    rating, 
    summary 
  } = movie;

  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return (
      <div className="min-h-screen bg-gradient-to-b from-[#3c1c1c] to-[#1e0d0d] text-gray-100">
      <div className="lg:w-4/5 px-5 lg:px-0 mx-auto flex flex-col sm:flex-row items-start lg:items-center gap-8 py-5 sm:py-10 lg:pt-20">
        {/* Movie Poster */}
        <div className="flex-shrink-0 w-full sm:max-w-xs lg:max-w-sm rounded-lg overflow-hidden shadow-md">
          <img src={poster} alt={title} className="w-full object-cover " />
        </div>

        {/* Movie Info */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="mt-2 text-gray-300">Directed by <span className="font-semibold">Abdur Razzak</span></p>

          {/* Year, Duration, Rating */}
          <div className="flex items-center gap-4 mt-4 text-gray-400">
            <span>Release: {releaseYear}</span>
            <span>Duration: {hours}h {minutes}m</span>
          </div>

          {/* Genre */}
          <div className="mt-4 flex flex-wrap gap-2">
            {genre.map((g, index) => (
              <span
                key={index}
                className="bg-red-500 text-white px-3 py-1 rounded-full text-sm"
              >
                {g}
              </span>
            ))}
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-1 text-yellow-400">
              <FaStar />
              <span>{rating.toFixed(1)}</span>
            </div>
            <span className="text-green-400">85%</span>
            <span className="text-red-400">81%</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600">
            <MdFavoriteBorder />
              Add to Favorite
            </button>
            <button onClick={()=>handleUpdate(movie._id)} className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600">
              <FaEdit />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600">
            <MdDelete />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600">
              <FaShareAlt />
            </button>
          </div>

          {/* Summary */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Summary:</h2>
            <p className="text-gray-300 mt-2 leading-relaxed">{summary}</p>
          </div>
        </div>
          </div>
          <div className="pb-10 lg:pb-20">
          <Link to={'/all-movies'} className="bg-gray-700 hover:bg-gray-600 px-5 py-2 text-lg font-semibold rounded text-center flex justify-center w-40 mx-auto">View All</Link>
          </div>
    </div>
  );
};

export default MovieDetails;

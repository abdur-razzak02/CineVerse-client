import { useEffect, useState } from "react";

const FeaturedMovies = () => {
  const [featuredMovies, setFeaturedMovies] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/featured-movies/featured")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedMovies(data);
      });
  }, []);

  return (
    <div className="px-5 lg:px-0 lg:w-4/5 mx-auto py-5">
      <h1 className="text-3xl font-semibold font-montserrat mb-2 text-purple-700">
        Featured Movies
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {featuredMovies?.map((fav) => (
          <div key={fav._id}>
            <img
              src={fav.poster}
              alt="movie poster"
              className="rounded w-full h-full hover:border border-slate-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMovies;

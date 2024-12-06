import { useEffect, useState } from "react";

const ActionMovie = () => {
    const [actionMovies, setActionMovies] = useState(null);

    useEffect(() => {
      fetch("http://localhost:5000/action-movies/action")
        .then((res) => res.json())
        .then((data) => {
          setActionMovies(data);
        });
    }, []);
    return (
        <div className="px-5 lg:px-0 lg:w-4/5 mx-auto py-5">
          <h1 className="text-3xl font-semibold font-montserrat mb-2 text-purple-700">
            Action Movies
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {actionMovies?.map((fav) => (
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

export default ActionMovie;
import { useState, useEffect } from "react";

const Favourites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("https://cineverse-9ca24.web.app/favorites")
      .then((res) => res.json())
      .then((data) => {
        setFavorites(data);
      });
  }, []);

  return (
    <div className="w-4/5 mx-auto py-10">
      <h1 className="text-4xl text-center mb-5">Favourites Movie</h1>
      <div>
        <h1>Favorites</h1>
        {favorites.map((fav) => (
          <div key={fav._id}>
            <h2>{fav.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;

import { useEffect, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Link } from "react-router-dom";

const ComedyMovie = () => {
  const [comedyMovies, setComedyMovies] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/comedy-movies/comedy")
      .then((res) => res.json())
      .then((data) => {
        setComedyMovies(data);
      });
  }, []);
  return (
    <div className="px-5 lg:px-0 lg:w-4/5 mx-auto mb-5 md:mb-10">
      <h1 className="text-3xl font-semibold font-montserrat mb-2 text-purple-700">
        Comedy Movies
      </h1>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        spaceBetween={20}
        navigation={true}
        virtual
        breakpoints={{
          320: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        <div>
          {comedyMovies?.map((comedy) => (
            <SwiperSlide key={comedy._id}>
              <div className=" w-full">
                <Link to={`/details/${comedy._id}`}>
                  <img
                    src={comedy.poster}
                    alt="poster"
                    className="h-full w-full rounded"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default ComedyMovie;
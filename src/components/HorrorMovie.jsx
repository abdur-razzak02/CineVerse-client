import { useEffect, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Link } from "react-router-dom";

const HorrorMovie = () => {
  const [horrorMovies, setHorrorMovies] = useState(null);

  useEffect(() => {
    fetch("https://cineverse-9ca24.web.app/horror-movies/horror")
      .then((res) => res.json())
      .then((data) => {
        setHorrorMovies(data);
      });
  }, []);

  return (
    <div className="px-5 lg:px-0 lg:w-4/5 mx-auto mb-5 md:mb-10">
      <h1 className="text-3xl font-semibold font-montserrat mb-2 text-purple-700">
        Horror Movies
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
          {horrorMovies?.map((horror) => (
            <SwiperSlide key={horror._id}>
              <div className=" w-full">
                <Link to={`/details/${horror._id}`}>
                  <img
                    src={horror.poster}
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

export default HorrorMovie;

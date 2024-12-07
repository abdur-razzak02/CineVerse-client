import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <div className="px-5 lg:px-0 lg:w-4/5 mx-auto mb-5 md:mb-10">
      <h1 className="text-3xl font-semibold font-montserrat mb-2 text-purple-700">
        Featured Movies
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
        <div className="grid grid-cols-3 gap-5">
          {featuredMovies?.map((featured) => (
            <SwiperSlide key={featured._id}>
              <div className=" w-full hover:border-slate-300">
                <Link to={`/details/${featured._id}`}>
                <img
                  src={featured.poster}
                  alt="poster"
                  className="h-full w-full rounded "
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

export default FeaturedMovies;

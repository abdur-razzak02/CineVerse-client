import { useEffect, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Link } from "react-router-dom";

const Drama = () => {
  const [drama, setDrama] = useState(null);

  useEffect(() => {
    fetch("cine-verse-server-topaz.vercel.app/drama-movies/drama")
      .then((res) => res.json())
      .then((data) => {
        setDrama(data);
      });
  }, []);

  return (
    <div className="px-5 lg:px-0 lg:w-4/5 mx-auto mb-5 md:mb-10">
      <h1 className="text-3xl font-semibold font-montserrat mb-2 text-purple-700">
        Drama
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
          {drama?.map((dramaOne) => (
            <SwiperSlide key={dramaOne._id}>
              <div className="w-full h-full">
                <Link to={`/details/${dramaOne._id}`}>
                  <img
                    src={dramaOne.poster}
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

export default Drama;

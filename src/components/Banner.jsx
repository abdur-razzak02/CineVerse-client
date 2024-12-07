import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="relative w-full min-h-[calc(100vh-50vh)] lg:min-h-[calc(100vh-30vh)] bg-cover bg-center flex justify-center items-center mb-5 md:mb-10"
      style={{
        backgroundImage: `url('https://i.ibb.co.com/CQgVbqR/Watch-Free-Hero-2048x1152-3.png')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          Free Movies to Watch, <br /> Anytime Anywhere.
        </h1>
        <p className="sm:text-lg md:text-xl mt-4 px-8 sm:px-0">
          The search is over! Let Plex help you find the perfect movie to watch
          tonight for free.
        </p>
        <Link to='all-movies' className="mt-6 flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-md shadow-lg transition">
          <FaPlay />
          Watch Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;

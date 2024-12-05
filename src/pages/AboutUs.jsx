// import from "react";
import { FaFilm, FaUsers, FaGlobe, FaHeart } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="max-w-4xl p-8 bg-slate-800 rounded-lg shadow-lg m-5">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-6">
          About CineVerse
        </h1>
        <p className="text-lg text-gray-400 text-center mb-8">
          Welcome to CineVerse! Your gateway to the world of movies, where
          storytelling meets innovation. We’re passionate about bringing cinema
          closer to everyone.
        </p>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <FaFilm className="text-7xl text-purple-700"/>
            <div>
              <h2 className="text-xl font-semibold text-purple-700">
                Our Mission
              </h2>
              <p className="text-gray-400">
                To create a platform where movie enthusiasts can explore,
                discover, and connect through the magic of cinema. Whether
                you are a casual viewer or a cinephile, CineVerse is your home.
              </p>
            </div>
          </div>

          {/* Community Section */}
          <div className="flex items-start gap-4">
            <FaUsers className="text-7xl text-purple-700" />
            <div>
              <h2 className="text-xl font-semibold text-purple-700">
                A Thriving Community
              </h2>
              <p className="text-gray-400">
                CineVerse is more than just a movie platform - it’s a community.
                Join thousands of users in discovering films, sharing
                experiences, and celebrating the art of storytelling.
              </p>
            </div>
          </div>

          {/* Global Reach Section */}
          <div className="flex items-start gap-4">
            <FaGlobe className="text-7xl text-purple-700" />
            <div>
              <h2 className="text-xl font-semibold text-purple-700">
                Global Reach
              </h2>
              <p className="text-gray-400">
                Our collection spans cultures, languages, and genres from
                around the world. Experience cinema like never before - diverse
                and inclusive for everyone.
              </p>
            </div>
          </div>

          {/* Passion for Movies Section */}
          <div className="flex items-start gap-4">
            <FaHeart className="text-7xl text-purple-700" />
            <div>
              <h2 className="text-xl font-semibold text-purple-700">
                Passion for Movies
              </h2>
              <p className="text-gray-400">
                Our platform is built by movie lovers, for movie lovers. We’re
                committed to curating the best cinematic experiences and
                celebrating the power of stories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

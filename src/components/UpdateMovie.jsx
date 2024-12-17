import { useContext, useEffect, useState } from "react";
import { FaFilm, FaClock, FaList, FaCalendarAlt, FaLink } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";

const UpdateMovie = () => {
  const { user } = useContext(AuthContext);
  const { _id } = useParams();
  console.log(_id);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://cineverse-9ca24.web.app/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setFormData(data))
      .catch((err) => console.error("Error fetching movie data:", err));
  }, [_id]);

  const [formData, setFormData] = useState({
    poster: "",
    title: "",
    genre: [],
    duration: "",
    releaseYear: "",
    rating: 0,
    summary: "",
  });

  const [errors, setErrors] = useState({});
  const genreOptions = [
    "Select a category",
    "Comedy",
    "Drama",
    "Horror",
    "Action",
    "Thriller",
    "Romantic",
    "Science Fiction",
  ];
  const releaseYears = [2024, 2023, 2022, 2021, 2020];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenreChange = (e) => {
    const selectedGenres = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData({ ...formData, genre: selectedGenres });
  };

  const handleRatingChange = (rate) => {
    setFormData({ ...formData, rating: rate });
  };

  const validateForm = () => {
    const newErrors = {};

    if (
      !formData.poster ||
      !/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(formData.poster)
    ) {
      newErrors.poster = "Please provide a valid image URL.";
    }
    if (!formData.title || formData.title.length < 2) {
      newErrors.title = "Title must be at least 2 characters long.";
    }
    if (!formData.genre.length) {
      newErrors.genre = "Please select at least one genre.";
    }
    if (!formData.duration || formData.duration < 60) {
      newErrors.duration = "Duration must be at least 60 minutes.";
    }
    if (!formData.releaseYear) {
      newErrors.releaseYear = "Please select a release year.";
    }
    if (!formData.rating) {
      newErrors.rating = "Please select a rating.";
    }
    if (!formData.summary || formData.summary.length < 10) {
      newErrors.summary = "Summary must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const updateMovie = {
        title: formData.title,
        poster: formData.poster,
        genre: formData.genre,
        duration: formData.duration,
        releaseYear: formData.releaseYear,
        rating: formData.rating,
        summary: formData.summary,
        email: user.email,
      };
      fetch(`https://cineverse-9ca24.web.app/movies/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateMovie),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            navigate("/");
            Swal.fire({
              title: "Movie updated successfully",
              showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `,
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `,
              },
            });
          }
        });

      setFormData({
        poster: "",
        title: "",
        genre: [],
        duration: "",
        releaseYear: "",
        rating: 0,
        summary: "",
      });
    }
  };

  return (
    <div className="flex justify-center px-5 lg:px-0 py-10 lg:py-20">
      <div className="max-w-4xl w-full bg-slate-800 shadow-lg rounded-lg p-8 text-gray-300">
        <h1 className="text-3xl font-bold text-purple-700 text-center mb-6">
          Update {}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Movie Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Movie Title</span>
            </label>
            <div className="relative">
              <FaFilm className="absolute top-4 left-3 text-gray-500" />
              <input
                required
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter movie title"
                className="input input-bordered pl-10 w-full bg-slate-900"
              />
            </div>
            {errors.title && (
              <span className="text-red-500 text-sm">{errors.title}</span>
            )}
          </div>

          {/* Movie Poster */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">
                Movie Poster (Image URL)
              </span>
            </label>
            <div className="relative">
              <FaLink className="absolute top-4 left-3 text-gray-500" />
              <input
                required
                type="text"
                name="poster"
                value={formData.poster}
                onChange={handleChange}
                placeholder="Enter image URL"
                className="input input-bordered pl-10 w-full bg-slate-900"
              />
            </div>
            {errors.poster && (
              <span className="text-red-500 text-sm">{errors.poster}</span>
            )}
          </div>

          {/* Genre */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Genre</span>
            </label>
            <div className="relative">
              <FaList className="absolute top-4 left-3 text-gray-500"></FaList>
              <select
                required
                //   multiple
                name="genre"
                onChange={handleGenreChange}
                className="select select-bordered w-full bg-slate-900 py-3 space-y-2 pl-10"
              >
                {genreOptions.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>
            {errors.genre && (
              <span className="text-red-500 text-sm">{errors.genre}</span>
            )}
          </div>

          {/* Duration */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Duration (minutes)</span>
            </label>
            <div className="relative">
              <FaClock className="absolute top-4 left-3 text-gray-500" />
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="Enter duration in minutes"
                className="input input-bordered pl-10 w-full bg-slate-900"
              />
            </div>
            {errors.duration && (
              <span className="text-red-500 text-sm">{errors.duration}</span>
            )}
          </div>

          {/* Release Year */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Release Year</span>
            </label>
            <div className="relative">
              <FaCalendarAlt className="absolute top-4 left-3 text-gray-500"></FaCalendarAlt>
              <select
                name="releaseYear"
                value={formData.releaseYear}
                onChange={handleChange}
                className="select select-bordered w-full bg-slate-900 pl-10"
              >
                <option value="">Select a year</option>
                {releaseYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            {errors.releaseYear && (
              <span className="text-red-500 text-sm">{errors.releaseYear}</span>
            )}
          </div>

          {/* Rating */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Rating</span>
            </label>

            <div className="flex space-x-2">
              {/* Apply flex to this div */}
              <Rating
                onClick={handleRatingChange}
                ratingValue={formData.rating}
                className="text-yellow-500 w-72 flex "
              />
            </div>

            {errors.rating && (
              <span className="text-red-500 text-sm">{errors.rating}</span>
            )}
          </div>

          {/* Summary */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Summary</span>
            </label>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              placeholder="Write a short summary"
              className="textarea textarea-bordered w-full bg-slate-900"
              rows={3}
            />
            {errors.summary && (
              <span className="text-red-500 text-sm">{errors.summary}</span>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-control pt-5">
            <button
              type="submit"
              className="btn bg-purple-700 hover:bg-purple-800 w-full border-none text-white"
            >
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMovie;

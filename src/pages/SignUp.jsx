import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaImage } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation: Ensure all fields are filled
    if (Object.values(formData).some((field) => field === "")) {
      alert("Please fill out all required fields.");
      return;
    }

    console.log("Form Submitted:", formData);
    alert("Signup successful!");
    // Proceed with API call or further processing
  };

  return (
    <div className="flex justify-center px-5 lg:px-0 py-10 lg:py-20">
      <div className="w-full max-w-sm p-8 space-y-6 bg-slate-800 shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold text-center ">
          Sign Up
        </h2>
        <form className="space-y-3" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="form-control text-gray-400">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <div className="relative">
              <FaUser className="absolute top-4 left-3 text-gray-500" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="input input-bordered pl-10 w-full bg-slate-900"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <div className="relative">
              <FaEnvelope className="absolute top-4 left-3 text-gray-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="input input-bordered pl-10 w-full bg-slate-900"
                required
              />
            </div>
          </div>

          {/* Photo-URL Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Photo URL</span>
            </label>
            <div className="relative">
              <FaImage className="absolute top-4 left-3 text-gray-500" />
              <input
                type="url"
                name="photoURL"
                value={formData.photoURL}
                onChange={handleChange}
                placeholder="Enter your photo URL"
                className="input input-bordered pl-10 w-full bg-slate-900"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label ">
              <span className="label-text text-white">Password</span>
            </label>
            <div className="relative">
              <FaLock className="absolute top-4 left-3 text-gray-500" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="input input-bordered pl-10 w-full bg-slate-900"
                required
              />
            </div>
          </div>

          {/* Signup Button */}
          <div className="form-control">
            <button type="submit" className="btn btn-primary w-full mt-3">
              Sign Up
            </button>
          </div>
        </form>

        {/* Login Link */}
        <p className="text-sm text-center text-gray-400 flex justify-center gap-2">
          <span>Already have an account?</span>
          <Link to="/login" className="text-indigo-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

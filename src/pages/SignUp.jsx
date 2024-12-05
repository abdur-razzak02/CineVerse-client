import { useContext, useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaImage } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

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
    if (Object.values(formData).some((field) => field === "")) {
      alert("Please fill out all required fields.");
      return;
    }

    const password = formData.password;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;

  if (password.length < 6) {
    setErrorMessage("Password must be at least 6 characters long.");
    return;
  }
  if (!uppercaseRegex.test(password)) {
    setErrorMessage("Password must contain at least one uppercase letter.");
    return;
  }
  if (!lowercaseRegex.test(password)) {
    setErrorMessage("Password must contain at least one lowercase letter.");
    return;
  }

  // Reset error message if all validations pass
  setErrorMessage("");

    createUser(formData.email, formData.password)
      .then((result) => {
        const lastSignInTime = result.user.metadata.lastSignInTime;

        const newUser = {
          name: formData.name,
          email: formData.email,
          photoURL: formData.photoURL,
          password: formData.password,
          lastSignInTime,
        };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              title: "Signup successful!",
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
          });
        setErrorMessage("");
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.code);
      });
  };

  return (
    <div className="flex justify-center px-5 lg:px-0 py-10 lg:py-20">
      <div className="w-full max-w-sm p-8 space-y-6 bg-slate-800 shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold text-center ">Sign Up</h2>
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

          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}

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

import { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
    <div className="px-5 py-10 lg:py-20 flex items-center justify-center bg-slate-900 text-gray-400">
      <div className="w-full max-w-sm bg-slate-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-white">Login</h2>
        <form className="space-y-4 mt-6">
          {/* Email Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-white">Email</span>
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full pl-10 bg-slate-900"
              />
            </div>
          </div>

          {/* Password Input with Toggle */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-white">Password</span>
            </label>
            <div className="relative">
              <span><FaLock className="absolute left-3 top-4 text-gray-400" /></span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered w-full pl-10 pr-10 bg-slate-900"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-4 text-gray-400 focus:outline-none"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <label className="py-2">
              <a href="#" className="text-sm text-indigo-500 hover:underline">
                Forgot Password?
              </a>
            </label>
          </div>

          {/* Login Button */}
          <button className="btn btn-primary w-full">Login</button>
        </form>

        <div className="divider divider-neutral py-5">OR</div>

        {/* Login with Google Button */}
        <button className="btn btn-outline w-full text-white hover:border-slate-500 hover:bg-slate-900">
         <FaGoogle></FaGoogle> Login with Google
        </button>

        {/* Sign Up Link */}
        <p className="mt-4 text-center text-sm flex justify-center gap-2">
          <span>New to CineVerse?</span>
          <Link to="/signup" className="text-indigo-500 font-medium link link-hover">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
};

export default Login;
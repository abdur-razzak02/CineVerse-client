import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { MdLogout } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          title: "An error happend!",
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
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-movies"}>All Movies</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/add-movie"}>Add Movie</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to={"/favourites"}>Favorites</NavLink>
        </li>
      )}
      <li>
        <NavLink to={"/about-us"}>About Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-slate-800 sticky z-50 top-0 shadow-xl">
      <div className="navbar px-5 lg:px-0 lg:w-4/5 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-slate-700 rounded-box z-[1] mt-3 w-44 p-2 shadow space-y-1"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="text-2xl font-semibold flex items-center gap-3"
          >
            <img
              src={"https://i.ibb.co.com/kyMh19B/cineverse.png"}
              alt="logo"
              className="w-10 hidden lg:flex"
            />
            <h1 className="font-montserrat">CineVerse</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5 xl:space-x-8">
            {links}
          </ul>
        </div>

        <div className="dropdown dropdown-end navbar-end flex top-0">
          {user ? (
            <div>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  {user.photoURL ? (
                    <img alt="user" src={user.photoURL} />
                  ) : (
                    <img
                      alt="user"
                      src="https://i.ibb.co.com/XZScZP5/profile.png"
                    />
                  )}
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-slate-700 rounded-box z-[1] w-44 p-2 shadow space-y-2"
              >
                <li className="flex flex-row items-center">
                  <h1>
                    <FaUser />
                  </h1>
                  <span className="p-0">Profile</span>
                </li>
                <li className="flex flex-row items-center">
                  <h1>
                    <IoSettingsSharp />
                  </h1>
                  <span className="p-0">Settings</span>
                </li>
                <li
                  onClick={handleLogout}
                  className="flex flex-row items-center text-red-500 font-semibold"
                >
                  <h1>
                    <MdLogout />
                  </h1>
                  <span className="p-0">Logout</span>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="bg-purple-700 mr-2 px-4 py-2 rounded-md font-semibold">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

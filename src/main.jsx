import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import MainLayout from "./pages/MainLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AboutUs from "./pages/AboutUs";
import AddMovie from "./pages/AddMovie";
import AuthProvider from "./provider/AuthProvider";
import AllMovies from "./components/AllMovies";
import MovieDetails from "./pages/MovieDetails";
import PrivateRoute from "./pages/PrivateRoute";
import Favourites from "./pages/Favourites";
import ErrorPage from "./pages/ErrorPage";
// import UpdateMovie from "./components/UpdateMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <MainLayout></MainLayout>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/add-movie",
        element: (
          <PrivateRoute>
            <AddMovie></AddMovie>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-movies",
        element: <AllMovies></AllMovies>,
        loader: () => fetch("https://cineverse-9ca24.web.app/movies"),
      },
      {
        path: "/favourites",
        element: (
          <PrivateRoute>
            <Favourites></Favourites>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <MovieDetails></MovieDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://cineverse-9ca24.web.app/movies/${params.id}`),
      },
      // {
      //   path: "/update/:id",
      //   element: <PrivateRoute>
      //     <UpdateMovie></UpdateMovie>
      //   </PrivateRoute>,
      //   loader: ({ params }) =>
      //     fetch(`https://cineverse-9ca24.web.app/movies/${params.id}`),
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

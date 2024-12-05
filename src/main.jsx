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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        element: <AddMovie></AddMovie>,
      },
      {
        path: "/all-movies",
        element: <AllMovies></AllMovies>,
        loader: ()=> fetch('http://localhost:5000/movies')
      },
      {
        path: "/details/:id",
        element: <MovieDetails></MovieDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/movies/${params.id}`)
      },
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

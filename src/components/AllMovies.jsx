import { useLoaderData } from "react-router-dom";
import Movie from "./Movie";


const AllMovies = () => {
    const movies = useLoaderData();

    return (
        <div className="px-5 lg:px-0 lg:w-4/5 mx-auto py-10 lg:pb-20">
            <h1 className="mb-10 text-center text-2xl">All movies ({movies.length})</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {
                movies.map(movie => <Movie key={movie._id} movie={movie}></Movie>)
            }
            </div>
        </div>
    );
};

export default AllMovies;
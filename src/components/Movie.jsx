/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
    const {poster} = movie
    return (
        <div>
            <Link to={`/details/${movie._id}`}><img  src={poster} alt="movie thumbnail" className="rounded w-full h-full hover:border border-slate-300"/></Link>
        </div>
    );
};

export default Movie;
import { Outlet } from "react-router-dom";
import FeaturedMovies from "../components/FeaturedMovies";
import Banner from "../components/Banner";
import ActionMovie from "../components/ActionMovie";
// import AddMovie from "./AddMovie";

const MainLayout = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedMovies></FeaturedMovies>
            <ActionMovie></ActionMovie>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
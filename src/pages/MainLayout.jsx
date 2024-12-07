import { Outlet } from "react-router-dom";
import FeaturedMovies from "../components/FeaturedMovies";
import Banner from "../components/Banner";
import ActionMovie from "../components/ActionMovie";
import RomanticMovie from "../components/RomanticMovie";
import ComedyMovie from "../components/ComedyMovie";
import HorrorMovie from "../components/HorrorMovie";

const MainLayout = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedMovies></FeaturedMovies>
            <ActionMovie></ActionMovie>
            <RomanticMovie></RomanticMovie>
            <ComedyMovie></ComedyMovie>
            <HorrorMovie></HorrorMovie>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
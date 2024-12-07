import { Outlet } from "react-router-dom";
import FeaturedMovies from "../components/FeaturedMovies";
import Banner from "../components/Banner";
import ActionMovie from "../components/ActionMovie";
import RomanticMovie from "../components/RomanticMovie";
import ComedyMovie from "../components/ComedyMovie";
import HorrorMovie from "../components/HorrorMovie";
import Drama from "../components/Drama";
import ScienceFiction from "../components/ScienceFiction";
import ThrillerMovie from "../components/ThrillerMovie";

const MainLayout = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedMovies></FeaturedMovies>
            <ActionMovie></ActionMovie>
            <RomanticMovie></RomanticMovie>
            <ComedyMovie></ComedyMovie>
            <Drama></Drama>
            <HorrorMovie></HorrorMovie>
            <ScienceFiction></ScienceFiction>
            <ThrillerMovie></ThrillerMovie>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
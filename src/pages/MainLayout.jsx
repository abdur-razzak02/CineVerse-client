import { Outlet } from "react-router-dom";
// import AddMovie from "./AddMovie";

const MainLayout = () => {
    return (
        <div>
            <h1 className="py-10 text-center text-4xl">Main Layout</h1>
            <Outlet></Outlet>
            {/* <AddMovie></AddMovie> */}
        </div>
    );
};

export default MainLayout;
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const loaction = useLocation()
    
    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-md"></span>
        </div>
    }

    if (!user) {
        return <Navigate state={loaction.pathname} to='/login'></Navigate>
    }

    return children
};

export default PrivateRoute;
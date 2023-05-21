import { useContext } from "react";
import { AuthContext } from "../providers/Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import ReactLoading from 'react-loading';

const PrivateRoute = ({children}) => {
    const { loading, user } = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return (
            <div style={{height: "1000px"}} className="d-flex justify-content-center align-items-center">
                <ReactLoading type={"bubbles"} color={"#ffc107"} height={'20%'} width={'20%'} />
            </div>
        );
    }

    if(user) {
        return children;
    }

    return <Navigate state={{from: location}} to="/login"></Navigate>
};

export default PrivateRoute;
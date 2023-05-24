import { useContext } from "react";
import { AuthContext } from "../providers/Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import ReactLoading from 'react-loading';
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoute = ({children}) => {
    const { loading, user } = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return (
            <div style={{height: "700px"}} className="flex justify-center items-center">
                <ReactLoading type={"bars"} color={"#f13372"} height={'20%'} width={'20%'} />
            </div>
        );
    }

    if(user) {
        return children;
    }

    return <Navigate state={{from: location, showToast: true}} to="/login"></Navigate>
};

export default PrivateRoute;
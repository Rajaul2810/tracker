import React, { useContext } from 'react';
import { Navigate,  useLocation } from 'react-router-dom';
import { UserContext } from '../App';


const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const {loggedInUser} = useContext(UserContext);

    const auth =  loggedInUser.email

    if(!auth){
        return <Navigate to="/login" state={{from:location}} replace/>
    }
    
    return children ;
        
};

export default PrivateRoute;
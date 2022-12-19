import React, { useContext } from 'react'
import { Link, } from "react-router-dom";
import { UserContext } from '../App';

const Navbar = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    console.log(loggedInUser)
   const handleLogout = () =>{
       setLoggedInUser('');
   }
    return (
        <nav className="navbar navbar-expand-lg bg-light mb-2">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">CryingObsidian</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 m-auto">
                        <li className="nav-item ">
                            <Link className="nav-link active item" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link  item"  to="/dashboard">Dashboard</Link>
                          </li>
                        
                     
                        <li className="nav-item ">
                            {
                                loggedInUser.email ?  <button type="button" onClick={handleLogout} className="btn btn-danger mx-3">Logout</button>:<Link className="nav-link item login" to="/login">Login</Link>
                            }
                            
                        </li>
                       
                    </ul>

                </div>
            </div>
        </nav>
    );
}
export default Navbar;
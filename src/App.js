import React, { createContext, useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './Component/Navbar';
import Signup from './Component/Signup';

import './App.css'
import { Home } from './Component/Home';
import PrivateRoute from './Component/PrivateRoute';
import { Dashboard } from './Component/Dashboard';
import Login from './Component/Login';
import { Details } from './Component/Details';
import AddProject from './Component/AddProject';
import { Issues } from './Component/Issues';
import { DashboardPage } from './Component/DashboardPage';




export const UserContext = createContext();


const App = () => {
  
  const [loggedInUser,setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (
    <UserContext.Provider value={{loggedInUser,setLoggedInUser}}>
     
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Home />} />
           <Route  path='/dashboard/*' element={ <PrivateRoute>  <Dashboard /> </PrivateRoute>} >
            <Route path='project' element={<AddProject />}/> 
            <Route path='issues' element={<Issues />}/> 
            <Route path='dash' element={<DashboardPage />}/> 
           
           </Route>
           <Route  path='/details/:id' element={<Details />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </BrowserRouter>
     
    </UserContext.Provider>
  )
}

export default App;

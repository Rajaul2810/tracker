import React, { useContext, useState } from 'react'
import {   Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { UserContext } from '../App';

function Login() {
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const location = useLocation();
   const { from } = location.state || { from: { pathname: "/" } };

    
    const handleUser = (e) => {
        const newUser = { ...user }
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }
     console.log(loggedInUser)
    // console.log(login);
    

    const handleLogin = () => {
        if(user.email && user.password){
        const addUser = { ...user }
        fetch('https://tracker-backend-one.vercel.app/login', {
            method: 'POST',
            headers: { 'Content-type': 'Application/json' },
            body: JSON.stringify(addUser)
        })
            .then(res => res.json())
            .then(data => {
                if(data.message === 'Successfully Login'){
                    setLoggedInUser(data.user)
                    swal("Good job!",data.message, "success");
                navigate(from ,{ replace: true })
                }else{
                    swal("Invalid",data.message, "warning");
                }
               
            })
        }else{
            swal("Invalid","All field are required", "warning");
        }
    }


    return (
        <div className='d-flex justify-content-center m-4 pt-4' style={{ backgroundColor: '#F6F6F6' }}>
            <div className='w-50 shadow p-3 mb-5 bg-body rounded ' style={{ backgroundColor: '#ffffff' }}>
                <div className='w-75 m-3'>
                    <h2 className='text-center'>Login</h2>
                    <div className="mb-3 ">
                        <label className="form-label">Email </label>
                        <input type="email" name='email' onChange={handleUser} className="form-control p-3" id="exampleFormControlInput1" placeholder="email" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" name='password' onChange={handleUser} className="form-control p-3" placeholder="password" />
                    </div>


                    <button type="button" onClick={handleLogin} className="btn btn-success btn-lg">LOGIN</button>
                </div>
                <Link to='/signup'>Create A New Account? Sign up</Link>
            </div>
        </div>
    )
}

export default Login
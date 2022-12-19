import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
//import { redirect } from 'react-router-dom';
import swal from 'sweetalert';

function Signup() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        rule: 'user',

    })

    const navigate = useNavigate();

    const handleUser = (e) => {
        const newUser = { ...user }
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }
    console.log(user)

    const handleReg = () => {

        if (user.name && user.email && user.password) {
            const addUser = { ...user }
            fetch('https://tracker-backend-one.vercel.app/register', {
                method: 'POST',
                headers: { 'Content-type': 'Application/json' },
                body: JSON.stringify(addUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                   // swal(data.message);
                    if (data.message === 'Successfully Registered') {
                        swal("Good Job", data.message, "success");
                        navigate("/login")
                    }else{
                        swal("Invalid",data.message, "warning");
                    }
                })
        } else {
            swal("Invalid", "All field are required", "warning");
        }


    }


    return (
        <div className='d-flex justify-content-center pt-4 m-4' style={{ backgroundColor: '#F6F6F6' }}>
            <div className='w-50 shadow p-3 mb-5 bg-body rounded ' style={{ backgroundColor: '#ffffff' }}>
                <div className='w-75 m-3'>
                    <h2 className='text-center'>Sign Up</h2>
                    <div className="mb-3">
                        <label className="form-label">Name </label>
                        <input type="text" name='name' onChange={handleUser} className="form-control p-3" placeholder="full name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email </label>
                        <input type="email" name='email' onChange={handleUser} className="form-control p-3" placeholder="email" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" name='password' onChange={handleUser} className="form-control p-3" placeholder="password" />
                    </div>


                    <button type="button" onClick={handleReg} className="btn btn-success btn-lg">Submit</button>
                </div>
                <Link to='/login'>Already Have An Account? Login</Link>
            </div>
        </div>
    )
}

export default Signup
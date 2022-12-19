import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import swal from 'sweetalert';


export const Details = () => {
    const params = useParams();

    const [projectData , setProjectData] = useState([]);

  useEffect(() => {
    fetch('https://tracker-backend-one.vercel.app/getProject')
        .then(res => res.json())
        .then(data => setProjectData(data));
}, [])

    


    const [report, setReport] = useState({
        email: '',
        message: ''
    })
    const handleUser = (e) => {
        const newReport = { ...report }
        newReport[e.target.name] = e.target.value;
        setReport(newReport);
    }
    
    

    const handleReport = () => {
        if(report.email && report.message){
        const addUser = { ...report, data:{...data}}
        fetch('https://tracker-backend-one.vercel.app/addReport', {
            method: 'POST',
            headers: { 'Content-type': 'Application/json' },
            body: JSON.stringify(addUser)
        })
            .then(res => res.json())
            .then(data => {
                    swal("Good job!",data.message, "success");

            })
        }else{
            swal("Invalid","All field are required", "warning");
        }
    }

    const data = projectData.find((info) => info._id === params.id)
    console.log(data)
    console.log(projectData);

    return (
        <div className='d-flex justify-content-center mt-3'>
            <div className='row w-75 shadow mb-5 bg-body rounded detail'>
                <div className='col-md-6 p-3'>
                    <div className='d-flex justify-content-center'>
                        <div style={{ color: 'green', height: '110px', width: '110px' }} className=' shadow-sm bg-info rounded pt-2 pb-2 ps-2 pe-2'>
                            <FaMapMarkerAlt size={100} />
                        </div>
                    </div>
                    <p><b>Project Name: </b>{data?.project_name}</p>
                    <p><b>Project Category: </b>{data?.category}</p>
                    <p><b>Affiliated Agency: </b>{data?.affiliated_agency}</p>
                    <p><b>Project Description: </b>{data?.description}</p>
                    <div className='d-flex justify-content-between'>
                        <p><b>Start Time: </b>{data?.project_start_time}</p>
                        <p><b>Completion Time: </b>{data?.project_completion_time}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p ><b>Total Budget: </b> JPY {data?.total_budget} M</p>
                        <p><b>Completion Percentage: </b>{data?.completion_percentage}</p>
                    </div>

                </div>
                <div className='col-md-6 pt-3' style={{ backgroundColor: '#fff0f3' }}>
                    <h2 className='text-center'>Issues</h2>
                    <div className="mb-3 ">
                        <label className="form-label">Email </label>
                        <input type="email" name='email' onChange={handleUser} className="form-control p-3" id="exampleFormControlInput1" placeholder="email" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <textarea type="text" name='message' onChange={handleUser} className="form-control p-3" rows={3} placeholder="message" />
                    </div>


                    <button type="button" onClick={handleReport} className="btn btn-success btn-lg">Submit</button>
                </div>
            </div>
        </div>
    )
}

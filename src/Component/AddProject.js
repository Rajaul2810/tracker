import React, { useContext, useState } from 'react'
import { UserContext } from '../App';
import swal from 'sweetalert';


function AddProject() {
    const [info, setInfo] = useState({
        project_name: '',
        category: '',
        affiliated_agency: '',
        description: '',
        project_start_time: '',
        project_completion_time: '',
        total_budget: '',
        lati: '',
        longi:'',
        completion_percentage:''
    })
    const { loggedInUser } = useContext(UserContext);



    const handleInfo = (e) => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    
    console.log(info);




    const sendInfo = () => {
        if (info.project_name && info.category && info.affiliated_agency && info.description && info.project_start_time && info.project_completion_time && info.lati && info.longi && info.total_budget && info.completion_percentage) {
            const addInfo = { project_name:info.project_name, category:info.category, affiliated_agency:info.affiliated_agency, description:info.description, project_start_time:info.project_start_time, project_completion_time:info.project_completion_time, lati:Number(info.lati), longi:Number(info.longi), total_budget:info.total_budget, completion_percentage:info.completion_percentage, user:{ ...loggedInUser} }
            console.log(addInfo)
            fetch('https://tracker-backend-one.vercel.app/addProject', {
                method: 'POST',
                headers: { 'Content-type': 'Application/json' },
                body: JSON.stringify(addInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.message === 'Successfully add Project') {
                        swal("Good job!", data.message, "success");
                    } else {
                        swal("Sorry", 'Do not add Info', "warning");
                    }
                })
        } else {
            swal("Invalid", "All field are required", "warning");
        }
    }




    return (
        <section style={{ backgroundColor: '#F6F6F6' }}>
            <div className='d-flex justify-content-center my-2 pt-3' >
                <div className='w-50 shadow p-3 mb-5 bg-body rounded ' style={{ backgroundColor: '#ffffff' }}>
                    <div className='w-75 m-3'>
                        <h2 className='text-center'>Add Project</h2>
                        <div className="mb-3">
                            <label className="form-label">Project Name </label>
                            <input type="text" name='project_name' onChange={handleInfo} className="form-control p-2" placeholder="project name" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Category </label>
                            <input type="text" name='category' onChange={handleInfo} className="form-control p-2" placeholder="category" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Affiliated Agency</label>
                            <input type="text" name='affiliated_agency' onChange={handleInfo} className="form-control p-2" placeholder="affiliated agency" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea type="text" name='description' onChange={handleInfo} className="form-control p-2" placeholder="description" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Project start time</label>
                            <input type="date" name='project_start_time' onChange={handleInfo} className="form-control p-2" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Project completion time</label>
                            <input type="date" name='project_completion_time' onChange={handleInfo} className="form-control p-2" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Total budget</label>
                            <input type="text" name='total_budget' onChange={handleInfo} className="form-control p-2" placeholder='budget' />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Latitude</label>
                            <input type="number" name='lati' onChange={handleInfo} className="form-control p-2" placeholder='latitude' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Longitude</label>
                            <input type="number" name='longi' onChange={handleInfo} className="form-control p-2" placeholder='longitude' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Completion percentage</label>
                            <input type="text" name='completion_percentage' onChange={handleInfo} className="form-control p-2" placeholder="completion percentage" />
                        </div>


                        <button type="button" onClick={sendInfo} className="btn btn-success">Submit</button>
                    
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AddProject
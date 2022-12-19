import React, { useEffect, useState } from 'react'
import { FaAtlassian, FaBitcoin, FaEnvelope } from "react-icons/fa";

export const DashboardPage = () => {

    const [infoData , setInfoData] = useState([]);
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        fetch('https://tracker-backend-one.vercel.app/getreport')
            .then(res => res.json())
            .then(data => setIssues(data));
    }, [])


    useEffect(() => {
      fetch('https://tracker-backend-one.vercel.app/getProject')
          .then(res => res.json())
          .then(data => setInfoData(data));
  }, [])

 

    return (
        <div>
            <div>
                <div className='row d-flex justify-content-between'>
                    <div className='col-md-4 p-2' style={{ backgroundColor: '#5e60ce', borderRadius: '6px', width: '25%', color: 'white' }}>
                        <div className='d-flex justify-content-between'>
                            <h5>Total Project</h5>
                            <FaAtlassian size={50} />
                        </div>
                        <h1>+ {infoData.length}</h1>
                    </div>
                    <div className='col-md-4 p-2' style={{ backgroundColor: '#c9184a', borderRadius: '6px', width: '25%', color: 'white' }}>
                        <div className='d-flex justify-content-between'>
                            <h5>Total Budget</h5>
                            <FaBitcoin size={50} />
                        </div>
                      <h2>JPY 4030 M</h2>
                    </div>
                    <div className='col-md-4 p-2' style={{ backgroundColor: '#db00b6', borderRadius: '6px', width: '25%', color: 'white' }}>
                        <div className='d-flex justify-content-between'>
                            <h5>Total Issues</h5>
                            <FaEnvelope size={50} />
                        </div>
                        <h1>+ {issues.length}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

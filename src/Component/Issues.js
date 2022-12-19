import React, { useEffect, useState } from 'react'

export const Issues = () => {

    const [issues, setIssues] = useState([]);

    useEffect(() => {
        fetch('https://tracker-backend-one.vercel.app/getreport')
            .then(res => res.json())
            .then(data => setIssues(data));
    }, [])

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>

                        <th scope="col">Project Name</th>
                        <th scope="col">Project Category</th>
                        <th scope="col">Email</th>
                        <th scope="col">Message</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        issues.map(data =>
                            <tr key={data._id}>
                                
                                <td>{data?.data.project_name}</td>
                                <td>{data?.data.category}</td>
                                <td>{data.email}</td>
                                <td>{data.message}</td>
                            </tr>

                        )
                    }

                </tbody>
            </table>
        </div>
    )
}

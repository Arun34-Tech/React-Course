import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function Api() {
    const[data,setdata]=useState([]);

    useEffect(()=>{
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{
            data.json().then(result=>{
                setdata(result.data);
            })
        })
    },[])
    return(
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th> Employee Name</th>
                <th> Salary</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => <tr key={index}>
                
                <td>{item.id}</td>
                <td>{item.employee_name}</td>
                <td>{item.employee_salary}</td>
                <td>{item.employee_age}</td>
            </tr>)
            }

        </tbody>
    </Table>
    )
}
export default Api;
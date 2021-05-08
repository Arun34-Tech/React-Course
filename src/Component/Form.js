import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

function Form() {
    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");
    const [Address, SetAddress] = useState("");
    
    function btnsubmit() {
        const data = [{ Name, Age, Address }]
        console.log("data is", data);
    }
    const data = ([
        { Name,Age,Address}
    ])
    return (
        <div>
            <label>Name :</label>
            <input type="text" name="UserName" onChange={(e) => setName(e.target.value)} value={Name} />
            <br /> <br />
            <label>Age :</label>
            <input type="text" name="UserName" onChange={(e) => setAge(e.target.value)} value={Age} />
            <br /> <br />
            <label>Address :</label>
            <input type="text" name="UserName" onChange={(e) => SetAddress(e.target.value)} value={Address} />
            <br /> <br />
            <button onClick={btnsubmit}> Submit</button>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th> Name</th>
                            <th> Age</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => <tr key={index}>
                            <td>{index}</td>
                            <td>{item.Name}</td>
                            <td>{item.Age}</td>
                            <td>{item.Address}</td>

                        </tr>)
                        }

                    </tbody>
                </Table>
            </div>
        </div>

    )
}
export default Form;
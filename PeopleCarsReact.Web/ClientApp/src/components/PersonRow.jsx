import React from "react";

export default function PersonRow({person}) {
const {id, firstName, lastName, age, cars} = person;
    return <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{age}</td>
        <td>{cars.length}</td>
        <td><a href={`/addcar/${id}`}><button className="btn btn-primary">Add Car</button></a></td>
        <td><a href={`/deletecars/${id}`}><button className="btn btn-danger">Delete Cars</button></a></td>
    </tr>
}
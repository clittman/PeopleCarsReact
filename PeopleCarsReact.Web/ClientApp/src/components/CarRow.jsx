import React from "react";

export default function CarRow(params) {
    const { car } = params;
    const { make, model, year } = car;
    return <tr>
            <td>{make}</td>
            <td>{model}</td>
            <td>{year}</td>
        </tr>
}
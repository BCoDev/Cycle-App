import React from "react";
import TypeAheadForm from "./TypeAheadForm.js";

const Dashboard = () => {

    const createBike = (selected) => {
        console.log(`${selected.brand }, ${selected.model}`)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Dashboard</h1>
             <TypeAheadForm onCreate={createBike} />

        </div>
    )
}

export default Dashboard

import React, { useState } from "react";
import Map from "./Map.js";
import TypeAheadForm from "./TypeAheadForm.js";
import BikeList from "./BikeList.js";

const Dashboard = () => {
    const [bikes, setBikes] = useState([])

    const createBike = ({ brand, model }) => {
        const updatedBikes = [...bikes, { id: Math.round(Math.random() * 9999), brand, model }]
        setBikes(updatedBikes)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Dashboard</h1>
            <BikeList bikes={bikes} />
            <TypeAheadForm onCreate={createBike} />
            <Map />
        </div>
    )
}

export default Dashboard

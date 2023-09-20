import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11);

    const handleAdd = () => {
        const newPlayer = team + 1;
        setTeam(newPlayer)
    }

    const handleRemove = () => {
        setTeam(team - 1)
    }

    const border = {
        border: '2px solid yellow',
        paddinga: '20px',
        margin: '10px'

    }

    return (
        <div style={border}>
            <h2>Player :{team} </h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}
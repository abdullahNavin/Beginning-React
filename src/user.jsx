import { useState } from "react"

export default function User() {
    const [user, setUser] = useState([]);

    useState(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])

    return (
        <div>
            <h2>User : {user.length}</h2>
        </div>
    )
}

/*
*declear a state for hold the data
*useEffect with defendency array
*/ 
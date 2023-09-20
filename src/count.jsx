import { useState } from "react"


export default function Count (){
    const [count,setCount] = useState(0)

    const handleAdd =() => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleReduce = () =>{
        const newCount = count - 1;
        setCount(newCount)
    }

    return (
        <div style={{border: '1px solid black'}}>
            <h3>counter : {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}

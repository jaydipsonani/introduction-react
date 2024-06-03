import React, { useState } from 'react'
import UseEffect from './UseEffect'

export default function Form({name}) {
    const [state, setState] = useState("")
    const [data, setData] = useState([])

    const HandleAdd = () => {
        setData([...data, state])
        clear()
        alert(`your name is ${state}`)
    }
    const clear = () => {
      setState('')
    }

  return (
    <>
    <UseEffect />
    <h6>Radhe {name}</h6>
    <input type='text' value={state} onChange={(e) => setState(e.target.value)} />
    <button onClick={HandleAdd}>add</button><br></br>
    {/* {console.log("data",data)} */}
    <h3>{data}</h3>
    </>

  )
}

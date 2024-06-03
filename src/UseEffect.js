import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    
    const [state, setState] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setState((count) => count + 1)
        }, 2000);
    },[])

  return (
    <>
    
    <h1>{state}</h1>
    </>
    
  )
}

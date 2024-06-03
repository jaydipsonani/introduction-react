import React, { useState } from 'react'

export default function UseState() {
    const [state, setState] = useState(0)
  return (
<>
    <button onClick={() => setState(state + 1)}>increment</button>
        <h1>{state}</h1>
    <button onClick={() => setState(state - 1)}>decrement</button>
</>

  )
}

import React from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
    const data = "children compoent"
  return (
    <>
        <ChildComponent data={data} />
    </>
  )
}

import React from 'react'
import GrandChild from './GrandChild'

export default function ChildComponent({data}) {

  return (
    <>
    <GrandChild data={data} />
    {/* <div>ChildComponent</div> */}
    </>
  )
}

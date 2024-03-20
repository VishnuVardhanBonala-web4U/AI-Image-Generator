import React, { useContext } from 'react'
import { StudentContext } from '../App';

const Child = () =>
{
  const {name}=useContext(StudentContext)
  return (
    <>
      <h1>This is child element  {name}</h1>
   </>
  )
}

export default Child
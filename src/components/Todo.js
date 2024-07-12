import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from '../slices/todoSlice'


const Todo = () => {

    const dispatch=useDispatch()
    
    const cartdata=useSelector((state)=>state?.single?.data)
    console.log(cartdata,"syamsai")
    const [input,setinput]=useState('')
    // const [main,setmain]=useSelector([cartdata])
    // console.log(main,"ramesh")
    


    const todoSubmit=()=>{
        dispatch(setData([...cartdata,input]))
        setinput("")

    }
  return (
    <div>
        <div>
            <input value={input} type="text" onChange={(e)=>{setinput(e.target.value)}}></input>
            <button onClick={()=>{todoSubmit()}}>Submit</button>
        </div>
    </div>
  )
}

export default Todo
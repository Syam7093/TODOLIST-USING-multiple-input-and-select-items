import React, { useEffect, useState } from 'react'
import axios from "axios";
// import Skeleton from 'react-loading-skeleton';
// import "react-loading-skeleton/dist/skeleton.css"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const SelectItems = () => {
    const [datt,setdata]=useState([])
    const [alldata,setalldata]=useState([])
    const [show,setshow]=useState(true)
  
    useEffect(()=>{
        maindata()
    },[])
    const maindata = async () => {
        setshow(true)
        const alladata = await axios.get("https://fakestoreapi.com/products");
        console.log(alladata.data[0],"maindata")
        
       
       
      
        setdata(alladata.data[0]);
        setalldata(alladata.data)
        setTimeout(()=>{
            setshow(false)
        },1500)
      };

      const selectiitem=(e)=>{
        console.log(e,"selecteditem..")
        setdata(e)

      }
      const sketletons=[]
      for(let i=0;i<10;i++)
      {
        sketletons.push(<Skeleton height={50} width={50}></Skeleton>)
      }
  return (
    <div>
        {
          <img src={datt?.image} height="50px" width="50px"></img>
        }
        <h1>-----------------</h1>
        <div>
           { show==true? <div>{sketletons}</div> :
            <div>
            {
                alldata.map((e)=>{
                    return (
                        <div onClick={()=>{selectiitem(e)}}>
                            <img src={e.image}height="50px" width="50px"></img>
                        </div>
                    )
                })
            }
            </div>}
           
        </div>
    </div>
  )
}

export default SelectItems
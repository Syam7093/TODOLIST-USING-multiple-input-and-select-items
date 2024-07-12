import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from '../slices/todoSlice'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "../App.css"

export const Single = () => {
    const one=useSelector((state)=>state?.single.data)
    const dispatch=useDispatch()
    const [show,setshow]=useState(false)
    const [secondinput,setsecondinput]=useState('')
    const [an,setan]=useState(null)
    const [showing,setshowing]=useState(true)
    console.log(an,'sai')
    

    const deleteTodo=(s)=>{
        const delelItem=one.filter((e)=>{
            return e!==s

        })
        dispatch(setData(delelItem))
        
    }

    useEffect(()=>{
        setTimeout(()=>{
            setshowing(false)
        },1000)
    },[])

    const ediBox=(e)=>{
        setsecondinput(e)
        setan(e)
        console.log(e,"hi")
        setshow(true)

    }

   // TWO ways....
// singe input in todolist using indexof
    const updatetodd=()=>{
        const update=one.map((item,index)=>{
          if(index==one.indexOf(an))
          {
            return secondinput 
          }
          return item
        })
        dispatch(setData(update))
        setshow(false)
      }


    //   const updateTodo = () => {
    //     const updatedItems = one.map((item) =>
    //         item === an ? secondInput : item
    //     );
    //     dispatch(setData(updatedItems));
    //     setShow(false);
    // };

    
  return (
    <div>
        <h1>this is todolist of data...</h1>
        <div>
            {one.map((e,index)=>{
                return (
                    <div key={index}>
                        <div>
                        <h2>{e}</h2>
                        <button onClick={()=>{ediBox(e)}}>Edit</button>
                        <button onClick={()=>{
                            deleteTodo(e)
                        }}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>

       { show && <div >
            <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
           <div style={{backgroundColor:"green",height:"60px",textAlign:"center",width:"220px",marginTop:"20px",padding:"10px",borderRadius:"10px"}}>
           <input value={secondinput} onChange={(e)=>{setsecondinput(e.target.value)}}  type="text"></input>
           <button onClick={()=>{updatetodd()}}>submit</button>
           </div>
            </div>
            
        </div>}

        <Skeleton height={30} width={120} heighlightColor="green"></Skeleton>
        <Skeleton height={30} width={120} highlightColor="green" ></Skeleton>
        { <div>
                        <Skeleton height={30} width={120} />
                        <Skeleton height={30} width={250} />
                    </div> }

    {showing==true?<div>

                    <table id="customers">
  <tr>
    <th><Skeleton width={120} height={30}></Skeleton></th>
    <th><Skeleton width={120} height={30} ></Skeleton></th>
    <th><Skeleton width={120} height={30}></Skeleton></th>
  </tr>
  <tr>
    <td><Skeleton width={120} height={30}></Skeleton></td>
    <td><Skeleton width={120} height={30}></Skeleton></td>
    <td><Skeleton width={120} height={30}></Skeleton></td>
  </tr>
  <tr>
  <td><Skeleton width={120} height={30}></Skeleton></td>
    <td><Skeleton width={120} height={30}></Skeleton></td>
    <td><Skeleton width={120} height={30}></Skeleton></td>
  </tr>
  <tr>
  <td><Skeleton width={120} height={30}></Skeleton></td>
    <td><Skeleton width={120} height={30}></Skeleton></td>
    <td><Skeleton width={120} height={30}></Skeleton></td>
  </tr>
  <tr>
  <td><Skeleton width={120} height={30}></Skeleton></td>
    <td><Skeleton width={120} height={30}></Skeleton></td>
    <td><Skeleton width={120} height={30}></Skeleton></td>
  </tr>
  <tr>
  <td><Skeleton width={120} height={30}></Skeleton></td>
    <td><Skeleton width={120} height={30}></Skeleton></td>
    <td><Skeleton width={120} height={30}></Skeleton></td>
  </tr>
  <tr>
  <td><Skeleton width={120} height={30}></Skeleton></td>
    <td><Skeleton width={120} height={30}></Skeleton></td>
    <td><Skeleton width={120} height={30}></Skeleton></td>
  </tr>
  <tr>
  <td><Skeleton width={120} height={30}></Skeleton></td>
    <td><Skeleton width={120} height={30}></Skeleton></td>
    <td><Skeleton width={120} height={30}></Skeleton></td>
  </tr>
  <tr>
  <td><Skeleton width={120} height={30}></Skeleton></td>
    <td><Skeleton width={120} height={30}></Skeleton></td>
    <td><Skeleton width={120} height={30}></Skeleton></td>
  </tr>
  <tr>
  <td><Skeleton width={120} height={30}></Skeleton></td>
    <td><Skeleton width={120} height={30}></Skeleton></td>
    <td><Skeleton width={120} height={30}></Skeleton></td>
  </tr>
  {/* <tr>
    <td>Paris spécialités</td>
    <td>Marie Bertrand</td>
    <td>France</td>
  </tr> */}
</table>

    </div>
    :
    <div>
    <table id="customers">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Berglunds snabbköp</td>
    <td>Christina Berglund</td>
    <td>Sweden</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Königlich Essen</td>
    <td>Philip Cramer</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
  <tr>
    <td>North/South</td>
    <td>Simon Crowther</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Paris spécialités</td>
    <td>Marie Bertrand</td>
    <td>France</td>
  </tr>
</table>
    </div>}

    </div>
  )
}

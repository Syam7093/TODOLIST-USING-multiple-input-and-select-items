import React, { useState } from 'react';

const JsonTodo = () => {
    const [one, setOne] = useState([
        {id:1,name:"syam"},
        {id:1,name:"syam"},
        {id:1,name:"syam"},
        {id:1,name:"syam"}
        
    ]);

    const [ss,setss]=useState('')
    const [mm,setmm]=useState('')
    const [input, setInput] = useState('');
    const [show, setShow] = useState(false);
    const [an, setAn] = useState(null);
    const [min,setmin]=useState([])
    const [bala,setbala]=useState('')
    const [rama,setrama]=useState('')
    console.log(min,"mmm-----")
    const [nm,setnm]=useState(null)

    const editonething=(e)=>{
        setbala(e.name)
        setrama(e.age)
        setnm(e)


    }
//multiple inputs to todolist
    const updateppp=()=>{
        const hhh=min.map((e)=>{
            if(e===nm)
            {
                return {...nm,name:bala,age:rama}
            }
            return e
        })
        setmin(hhh)
    }


    const submitone=()=>{

        setmin([...min,{name:ss,age:mm}])
        setmm("")
        setss('')
    }

    const deleteOne = (s) => {
        const main = one.filter((e) => e !== s);
        setOne(main);
    }

    const editText = (e) => {
        setShow(true);
        setAn(e);
        setInput(e.name);
        console.log('Editing:', e); // Debug log
    }
//single input
    const submitTodos = () => {
        console.log('Submitting:', input); // Debug log
        const somesome=one.map((e)=>{
            if(e.id==an.id)
            {
                return {...an,name:input}
            }
            return e
        })
        setOne(somesome);
        setShow(false);
        setInput('');
        // setAn(null);
        // console.log('Updated List:', updatedList); // Debug log
    };


    const singleoness=(j)=>{
        const lll=min.filter((e)=>{
            return e!==j
        })

        setmin(lll)

    }

    return (
        <div>
            <input value={ss}type="text" onChange={(e)=>{setss(e.target.value)}}></input>
            <input value={mm} type="text" onChange={(e)=>{setmm(e.target.value)}}></input>
            <button onClick={()=>{submitone()}}>submit</button>
            {show && (
                <div>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                    />
                    <button onClick={submitTodos}>Submit</button>
                </div>
            )}
            {one.map((e) => (
                <div key={e.id}>
                    <h1>{e.name}</h1>
                    <button onClick={() => deleteOne(e)}>Delete</button>
                    <button onClick={() => editText(e)}>Edit</button>
                </div>
            ))}

            {min.map((e)=>{
                return(
                    <div>
                        <h4>{e.name}</h4>
                        <button onClick={()=>{singleoness(e)}}>delete</button>
                        <button onClick={()=>{editonething(e)}}>edit</button>
                    </div>
                )
            })}

            <div>
                <h1>-----------------</h1>
            <input value={bala} type="text" onChange={(e)=>{setbala(e.target.value)}}></input>
            <input value={rama} type="text" onChange={(e)=>{setrama(e.target.value)}}></input>
            <button onClick={()=>{updateppp()}}>submit</button>
            </div>
        </div>
    );
}

export default JsonTodo;

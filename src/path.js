import React,{useState} from 'react';


const Path = () =>{


    const[change,setChange]=useState("true");
    return(
        <div>
        <button onClick = {() => setChange(!change)} style={{color:'red',backgroundColor:'green'}}>
          Click Here!
        </button>
        {change?<h1 >Welcome to REACT</h1>:
                <h1>hello hai</h1>}
        </div>
    );

   

}
export default Path;
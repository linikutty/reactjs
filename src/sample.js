 import React from 'react';
 import ReactDOM from 'react-dom';

//eg-1

class demo{
    demo(){
        let a=5;
        let b=10;
        let c=a+b;
        document.getElementById("root").innerHTML=c;

    }

}
let mydemo=new demo();
mydemo.demo();
 
//eg-2

var samp=(a,b)=>{
        
        
        let d=a+b;
        document.getElementById("root1").innerHTML=d;
}
samp(20,30);

//eg-3

const myStyle={
    color:'green',
    textAlign:'center'
}

var MyEle =()=>{
return(<div style={myStyle}> 
    <h1>WELCOME</h1>
    <h2>Haii</h2>
    <p>I am SHALU</p>
 </div>)
}
 ReactDOM.render(<MyEle/>,document.getElementById("root2"));

 //eg-4

const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myElement = <h1 style={{color:'red'}}>{text}</h1>;

const roots = ReactDOM.createRoot(document.getElementById('root3'));
roots.render(myElement);

// (or)

const j = 51;

const myEle = <h1  style={{color:'yellow'}}>{(j) < 10 ? "Hello" : "Goodbye"}</h1>;
const rootss = ReactDOM.createRoot(document.getElementById("root4"));
rootss.render(myEle);
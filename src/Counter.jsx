import React,{useState} from 'react';

function Counter(){

    const [count,setCount]=useState(0);

    const increamentcount=()=>{
        setCount(count+1);
    }
    const decreaseplease=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }
    return(
        <div className="counter-container">
            <p className="hello">{count}</p>
            <button className="buttoncount" onClick={increamentcount}>Increase</button>
            <button className="buttoncount" onClick={reset}>Reset</button>
            <button className="buttoncount" onClick={decreaseplease}>Decrease</button>

        </div>
        
    );
}
export default Counter
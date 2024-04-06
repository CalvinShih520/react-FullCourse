import React , {useState} from "react";

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(c => c + 1);
    }
    const drecrement = () =>{
        setCount(c => c - 1);
    }
    const reset = () =>{
        setCount(c => c = 0);
    }

    return(
        <div className="counter-container">
            <p className="counter-display">{count}</p>
            <button className="counter-button" onClick={drecrement}>Decrement</button>
            <button className="counter-button" onClick={increment}>Increment</button>
            <button className="counter-button" onClick={reset}>Reset</button>
        </div>
    );
    
}
export default Counter
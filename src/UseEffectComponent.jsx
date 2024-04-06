import React, {useEffect, useState} from "react";

function UseEffectComponent(){
    
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    const [width, setwidth] = useState(window.innerWidth);
    const [height, setheight] = useState(window.innerHeight);


    useEffect(() =>{
        window.addEventListener("resize",handleResize);
        console.log("Event Listener added");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event listener remove");
        }
    },[]);

    useEffect(()=> {
        document.title = `Size: ${width} x ${height}`;
    },[width,height]);
    


    useEffect(() =>{
        document.title = `Count: ${count} ${color}`;
    },[count,color]);

    function addCount(){
        setCount(c  => c + 1);
    }

    function subtractCount(){
        setCount(c  => c - 1);
    }

    function changeColor(){
        setColor(c  => c === "green" ? "red" : "green");
    }

    function handleResize(){
        setwidth(window.innerWidth);
        setheight(window.innerHeight);
    }

    return(
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={changeColor}>Change Color</button>
            <p>Window Width: {width}</p>
            <p>Window Height: {height}</p>

        </>
    );
}
export default UseEffectComponent
import react, {useState} from "react";

function MyComponent(){

    const [name,setName] = useState("Guest");
    const updateName = () =>{
        setName("Spongebob")
    }

    const [age,setAge] = useState(0);
    const updateAge = () =>{
        setAge(age + 1)
    }

    const [isEmployed,setIsEmployed] = useState(false);
    const updateIsEmployed = () =>{
        setIsEmployed(!isEmployed)
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={updateAge}>Set Age</button>
            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={updateIsEmployed}>Toogle Status</button>
        </div>
    );
}
export default MyComponent
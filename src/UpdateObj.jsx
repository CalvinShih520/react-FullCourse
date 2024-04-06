import React, {useState} from "react";

function UpdateObj(){

    const [car, setCar] = useState({year: 2024,
                                    make: "Ford",
                                    model: "Mustang"});

    const [foods, setFoods] = useState(["Apple","Orange","Banana"]);

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");


    function handleYearChange(event){

        //setCar({year:2025})
        //setCar({year: 2024, make: "Ford", model: "Mustang", year:2025})
        //setCar({...car,year:2025})
        setCar(car => ({...car, year: event.target.value}))
        setCar(c => ({...c, year: event.target.value}))

    }
    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}))
    }
    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}))
    }

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index));
    }

    function handleAddCar(){
        
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel};
        
        setCars(c => [...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }
    function handleRemoveCar(index){
        setCars(c => c.filter((_,i) => i !== index) );
    }
    function handleYearCarChange(event){
        setCarYear(event.target.value);
    }
    function handleMakeCarChange(event){
        setCarMake(event.target.value);
    }
    function handleModelCarChange(event){
        setCarModel(event.target.value);
    }

    return(
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange} /><br/>
            <input type="text" value={car.make}   onChange={handleMakeChange} /><br/>
            <input type="text" value={car.model}  onChange={handleModelChange} /><br/>

            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={handleAddFood}>Add Food</button>

            <h2>List of Car Object</h2>
            <ul>
                {cars.map((car, index) => 
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleYearCarChange} />
            <input type="text" value={carMake} onChange={handleMakeCarChange}
                   placeholder="Enter car make" />
            <input type="text" value={carModel} onChange={handleModelCarChange}
                   placeholder="Enter car model" />
            <button onClick={handleAddCar}>Add Car</button>

        </div>
    );
}
export default UpdateObj
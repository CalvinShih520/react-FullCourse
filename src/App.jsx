import Header from "./Header"
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import EventButton from "./ClickEvent/EventButton";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import InputComponent from "./InputComponent";
import ColorPicker from "./ColorPicker";
import UpdateObj from "./UpdateObj";
import ToDoList from "./ToDoList";
import UseEffectComponent from "./UseEffectComponent";
import DigitalClock from "./DigitalClock";
import ComponentA from "./ComponentA";
import Stopwatch from "./Stopwatch";

function App() {

  const fruits = [{id: 1, name: "apple", calories: 95}, 
                  {id: 2, name: "orange", calories: 45}, 
                  {id: 3, name: "banana", calories: 105}, 
                  {id: 4, name: "coconut", calories: 159}, 
                  {id: 5, name: "pinapple", calories: 37}];
  const vegetable =  [{id: 1, name: "potatoes", calories: 110}, 
                      {id: 2, name: "celery", calories: 15}, 
                      {id: 3, name: "Carrots", calories: 25}, 
                      {id: 4, name: "corn", calories: 63}, 
                      {id: 5, name: "broccoli", calories: 50}];

  return(
    <>
      <Header/>
      <Stopwatch />
      <ComponentA />
      <DigitalClock />
      <UseEffectComponent />
      <ToDoList />
      <UpdateObj />
      <ColorPicker />
      <InputComponent />
      <Counter />
      <EventButton />
      <MyComponent />
      <Card />
      <br />
      <Button />
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={40} isStudent={false} />
      <Student />
      <UserGreeting isLoggedIn={true} username="BroCode" />
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegetable.length > 0 && <List items={vegetable} category="Vegetable" /> }
      <Food/>
      <Footer/>
    </>
    
  );
}

export default App

import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./App.module.css";
import {useEffect, useState} from "react";

function Hello(){
  useEffect(function(){
    console.log("hi :)");
  return function(){
    console.log("bye :(");
  };
}, []);
  return <h1>Hello</h1>;
}

function App() {
const [toDo, setTodo] = useState("");
const[toDos, setToDos] = useState([]);
const onChange = (event) => setTodo(event.target.value);
const onSubmit = (event) => {
  event.preventDefault();
  if(toDo === ""){
    return;
  }
  setToDos((currentArray) => [toDo, ...currentArray]); //여기에 직전의 값을 받아올 것임.
  setTodo("");
};
console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="Write your to do,,,"/>
      <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;

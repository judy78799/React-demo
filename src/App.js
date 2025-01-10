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
//App function 작성
function App() {
const [toDo, setTodo] = useState("");
const[toDos, setToDos] = useState([]);
//onChange 이벤트 작성
const onChange = (event) => setTodo(event.target.value);
//onSubmit 이벤트 작성
const onSubmit = (event) => {
  event.preventDefault();
  //만약 toDo가 존재하지 않는다면, null 상태라면~ return.
  if(toDo === ""){
    return;
  }
  setToDos((currentArray) => [toDo, ...currentArray]); //여기에 직전의 값을 받아올 것임.
  setTodo("");
};//onSubmit() END
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

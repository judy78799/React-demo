import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./App.module.css";
import {useState} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => 
    console.log('render');
    setValue((prev) => prev + 1);
    
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <Button text={"Continue"}/>
    </div>
  );
}

export default App;

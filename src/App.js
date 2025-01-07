import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./App.module.css";
import {useEffect, useState} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => 
    setValue((prev) => prev + 1);
  console.log("I run all thee time");
 const iRunOnlyOnce = () => {
  console.log("i run only once");
 };
 useEffect(() => {
  console.log("CALL THE API...");
 }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

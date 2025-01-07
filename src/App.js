import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./App.module.css";
import {useEffect, useState} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
 
  useEffect(() => {
    console.log("I run only once.");
  }, []); //아무런 것이 안들어가 있기 때문에 React가 지켜보는 요소가 존재하지 않음.
  useEffect(() => {
    console.log("I run when 'keyword' changes...");
  }, [keyword]);  //리액트가 keyword가 변경될 때마다 콘솔로그 실행.
  useEffect(() => {
    console.log("I run when 'counter' changes...");
  }, [counter]);  //리액트가 counter가 변경될 때마다 콘솔로그 실행.

  return (
    <div>
      <input 
              value={keyword} 
              onChange={onChange} 
              type="text" 
              placeholder="Search here..."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

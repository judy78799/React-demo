import PropTypes from "prop-types";
//스타일을 Button에 import 한다.
import styles from "./Button.module.css";

function Button({text}){
    return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
    text:PropTypes.string.isRequired, 
};
export default Button;
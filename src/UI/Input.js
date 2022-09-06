import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
    // props.value != null ? props.value : '';
    return <div className={classes.inputDiv} key={props.value}>
        <img src={props.image} className={classes.inputimg}/>
        <label htmlFor="link" className={classes.label}>{props.label}</label>
        <input id="link" type="text" className={classes.input} defaultValue={props.value || ''} 
        // onChange={(e)=>props.pressHandler(e)}
        onKeyDown={(e)=>props.pressHandler(e)}/>
    </div>
}

export default Input;
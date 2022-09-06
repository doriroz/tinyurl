// import React from "react";
import React,{useState} from "react";
import classes from "./UrlBox.module.css";
import Input from "../UI/Input";
import image from "../assets/link.png";
import wizard from "../assets/wizard.png";
import Button from "../UI/Button";
import Router from "react-router-dom";

const UrlBox = (props) => {
    const label1=" Enter a long URL to make a TinyURL";
    const label2="Customize your link";
    const [url,setUrl] = useState('');
    const [urlId,setUrlId] = useState('');
    
    const [urldst,setUrldst] = useState('');
    
    const getTinyURL = (url) => {
        
        fetch('https://tinyurlapp-41ab0-default-rtdb.firebaseio.com/tiny.json')
        .then(response=>response.json())
        .then(data=>{
            if(data){
                setUrlId(Object.entries(data)[Object.entries(data).length - 1][0].slice(1));
            }
        });
    }

    const keyDownHandler = (event) => {
        console.log(event.keyCode);
        if(event.keyCode == 13){
            console.log(event.target.value);
            setUrl(event.target.value);
            // getTinyURL();
        }
            
    }

    const clickHandler = () => {
        console.log(url);
        // event.preventDefault();
        // getTinyURL();
        props.copyurl(url);
        setUrl('');
    }

    const getUrlHandler = () => {
        fetch('https://tinyurlapp-41ab0-default-rtdb.firebaseio.com/tiny.json')
        .then(response=>response.json())
        .then(data=>{
            const urlElem = Object.entries(data).find(val=> val[0]==urlId);
            const urlSrc = urlElem[1];
            setUrl(urlSrc);
        })
        

    }

    return <div className={classes.urlBox}>
        <Input label={label1} image={image} value={url} pressHandler={keyDownHandler}/>
        {/* <a href={url} onClick={getUrlHandler}>{`www.TinyURL.com/${urlId}`}</a> */}
        <Input label={label2} image={wizard} value={urldst}/>
        
        <Button name={`Make your TinyURL`} click={clickHandler}/>
    </div>
}

export default UrlBox;
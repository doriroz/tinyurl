import React ,{useContext}from "react";
import redirect from "../assets/redirect.jpg";
import classes from "./MiniButton.module.css";
import UrlConsumer from '../Store/UrlContext';
const MiniButton = (props) => {
    const urlCtxt = useContext(UrlConsumer);

    const clickHandler = (e) => {
        if(e.target.innerText == 'Remove'){
            removeUrl(props.urltiny);
        }

        if(e.target.innerText == 'Copy'){
            console.log(props.url);
            copyUrl(props.url);
            urlCtxt.setUrltiny(props.urltiny);
        }
    }

    const removeUrl = async (url) => {
        await fetch(`https://tinyurlapp-41ab0-default-rtdb.firebaseio.com/tiny/${url}.json`,{
        method:'DELETE',
        mode:'cors',
        headers: {
            'Access-Control-Allow-Origin':'http://localhost:3000',
        }})
        .then(response=>response.json())
        .then((data)=> {
            console.log(data);
            urlCtxt.setUrlsLoaded(true);
            urlCtxt.getTinyURL();
        });
    }

    const copyUrl = async (url) => {
        console.log(url);
        navigator.clipboard.writeText(`http://localhost:3000/tiny/${props.urltiny}`);
        urlCtxt.setUrl(url);
        // getUrl(props.urltiny);
    }

    const getUrl = async (url) => {
        console.log(url);
        await fetch(`https://tinyurlapp-41ab0-default-rtdb.firebaseio.com/tiny/${url}.json`)
        .then(response=>response.json())
        .then(data => Object.entries(data).map(val=> console.log(val[0].slice(1))));
    }

    const miniButtons = ['Copy','Rename','Remove'].map((val,ind)=><button key={ind} onClick={(event)=>clickHandler(event)}>{val}</button>);
    return <div className={classes.miniButton}>
        <a href={props.url}><img className={classes.miniButtonImg} src={redirect} /></a>
        {miniButtons}
    </div>
}

export default MiniButton;
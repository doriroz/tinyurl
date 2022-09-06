import React from "react";
import classes from "./MyUrl.module.css";
import MiniButton from "../UI/MiniButton";
import WorldWide from "../assets/worldwide.png";
import moment from 'moment';
import LoadingSpinner from "../UI/LoadingSpinner";
const MyUrl = (props) => {

    // props.urls.map(val=>console.log(val[0].slice(1)));
    
    // props.urls.map(val=>console.log(Object.values(val[1])[0]));
    // props.urls.map(val=>console.log(Object.values(val[1])[1]));
    
    const listUrl = props.urls.map((val,ind)=> {
        const shorturl = `www.tinyurl.com/${val[0]}`;
        const dt =  Object.values(val[1])[0];
        console.log(Object.values(val[1]));
        const url = Object.values(val[1])[1];
        console.log(moment(moment(dt).format("YYYYMMDD"),"YYYYMMDD").fromNow());
        const date =  moment(moment(dt).format("YYYYMMDD"),"YYYYMMDD").fromNow();
        
        return <div key={ind}>
            <li>
                <div>
                <img src={WorldWide}/>
                <p className={classes.shrturl}>{shorturl}</p>
                </div>              
                <p>{url}</p>
                <p>{date}</p>
            </li>
            <MiniButton urltiny={val[0]} url={url}/>
        </div>
    });

    const clickHandler = () => {
        props.updstyle(classes.closeurl);
    }

    const myurlstyle = `${classes.myurl} ${props.stylemyurl}`;

    return <div className={myurlstyle}>
        <div style={{display:"flex",justifyContent:"end"}}>
        <button style={{margin:"10px",border:"none",padding:"10px 12px",borderRadius:"50%",color:"white",backgroundColor:"rgb(66, 25, 245)"}} onClick={clickHandler}>X</button>
        </div>
        
        <ul>
            {props.urlsLoaded?<LoadingSpinner /> : listUrl}
        </ul>
    </div>
}

export default MyUrl;
import React, {useEffect, useState} from "react";
import { useParams  } from "react-router-dom"; 
// import axios from "axios";
const Request = () => {
    const params = useParams();
    console.log(params.tinyId);
    
    const urltiny = `https://tinyurlapp-41ab0-default-rtdb.firebaseio.com/tiny/${params.tinyId}.json`;

    let res = '';
    const [urlsource,setUrlsource] = useState('');
    useEffect(async ()=>{
        
    try{
        res = await 
        fetch(urltiny)
         .then(response=>response.json())
         .then(data=> data.urlSource);
        //  setUrlsource(data.urlSource) 
        window.location.replace(res)
    }
    catch(e){
        console.log(`${e} is occured during fetching data`);
    }
    },[])
    
    return <div></div>   
}

export default Request;


    // console.log(res);
    // const r = useCallback(async ()=>{
    //     try{
    //         const res = await axios.get(urltiny,{
    //             headers:{
    //                 Accept:'application/json'
    //             }
    //         })
    //         console.log(res.data.urlSource);
    //     }
    //     catch(e){
    //         console.log(`${e} is occured during fetching data`);
    //     }
    // })
     
    // console.log(r);
    // fetch(`https://tinyurlapp-41ab0-default-rtdb.firebaseio.com/tiny/${params.tinyId}.json`)
    // .then(response=>response.json())
    // .then(data=>console.log(data.urlSource));
    // .then(data => data.map(val=>val.urlSource))
    // .then(data => Object.entries(data).map(val=> console.log(val[1])));
    // .then(data => Object.entries(data).map(val=> val[1]));
    // setTimeout(() => {
    //     res.map(v=>console.log(v));    
    // }, 3000);
    
    // Object.entries(data).map(val=> val[0].slice(1)));
    // .then(data => Object.entries(data).map(val=> console.log(val[0].slice(1))));
    // return res;
    // return <div>{"res"}</div>
import React from "react";
import classes from "./Navigation.module.css";
import classMyurl from "../Component/MyUrl.module.css";

const Navigation = (props) =>{
    // const is
    const menu = ['Help','My Url','Sign-in','Sign-up'];
    // const myurl = 
    const selectNav = nav => {
        // props.getmyurl();
        console.log(nav.target.innerText);
         if(nav.target.innerText=='My Url'){
            props.updstyle(classMyurl.opnmyurl);
         }

    }

    const listMenu = menu.map((val,ind)=>{
        console.log(val);
        return <div className={classes.val} key={ind}><a onClick={(val)=>selectNav(val)}>{val}</a></div>;
    })
    return <div className={classes.menu}>
        {listMenu}
    </div>
}

export default Navigation;
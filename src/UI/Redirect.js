import React from "react";
import { useParams } from "react-router-dom";
const Redirect = () => {
    const params = useParams();
    console.log(params.tinyId);
    return <div>
        <h1>Welcome to the new redirection</h1>
    </div>

}

export default Redirect;
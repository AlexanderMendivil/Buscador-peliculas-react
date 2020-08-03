import React from "react";
import {Link} from "react-router-dom";

export const ButtonBackToHome=()=>(
    
    <Link
    className ="button is-info"
    to="/" style={{marginTop: "20px", marginBottom: "10px" }}>
        volver al inicio
    </Link>

)
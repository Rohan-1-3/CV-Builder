/* eslint-disable react/prop-types */
// import React from 'react';
import "../cssFiles/ExtraFeatures.css"

function ExtraFeatures ({name, icon, handleClick}){
    return(
        <div className="feature-card" onClick={()=>handleClick()}>
            <img src={icon} alt={name}/>
            <p>{name}</p>
        </div>
    )
}

export default ExtraFeatures;
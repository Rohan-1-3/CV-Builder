/* eslint-disable react/prop-types */
// import React from 'react';
import "../cssFiles/ExtraFeatures.css"

function FeatureCard ({detail}){
    return(
        <div className="feature-card">
            <img src={detail.iconSrc} alt={detail.name}/>
            <p>{detail.name}</p>
        </div>
    )
}

function ExtraFeatures({features}) {

    return (
        <div className='extra-features'>
            {features.map(feature => <FeatureCard key={feature.id} detail={feature} />)}
        </div>
    );
}

export default ExtraFeatures;
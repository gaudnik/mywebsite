import React from "react";
import Gallery from "react-photo-gallery";
import photosData from "../PhotosData/PhotosData";

const ScoutTest = () => {
    
    return (
        <div className="scouttest">
            <div className="scouttest__description">
                <h2>Scout Test</h2>
                <p className="scouttest__text">
                    The website "scout test" is a project for one of 
                    the Polish marketing companies. In the project I used 
                    React.js and React Router to handle subpages. I also 
                    used the potential of hooks available from React 
                    16.8, e.g. useState, useEffects, useNavigate. The "scout 
                    test" website is responsive (two breakpoints) and styled 
                    using the Sass preprocessor.
                </p>
            </div>
            <div className="scouttest__box">
            <Gallery photos={photosData} />
            </div>
        </div>
    )
}

export default ScoutTest;

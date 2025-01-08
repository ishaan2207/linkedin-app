// deps
import React from "react";

// styles
import './RightPane.css';

// components
import TrendingNow from "../../../components/TrendingNow/TrendingNow";
import Footer from "../../../components/Footer/Footer";

function RightPane() {
    return (
        <div className="rightPaneContainer">
            <TrendingNow className='trendingNowElement' />
            <Footer className='footerElement' />
        </div>
    )
}

export default RightPane;
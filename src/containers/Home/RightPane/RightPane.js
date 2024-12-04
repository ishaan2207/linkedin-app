import React from "react";
import './RightPane.css';
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
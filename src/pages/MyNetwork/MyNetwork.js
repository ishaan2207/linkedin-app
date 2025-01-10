import React, { useEffect } from "react";
import './MyNetwork.css';
import LeftPane from "../../containers/MyNetwork/LeftPane/LeftPane";
import MainFeed from "../../containers/MyNetwork/MainFeed/MainFeed";

function MyNetwork() {
    return (
        <div className="myNetworkContainer">
            <div className="myNetworkLeftPane">
                <LeftPane />
            </div>
            <div className="myNetworkMainFeed">
                <MainFeed />
            </div>
        </div>
    )
}

export default MyNetwork;
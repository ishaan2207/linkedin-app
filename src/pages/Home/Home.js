// deps
import React from "react";

// styles
import './Home.css'

// containers
import LeftPane from "../../containers/Home/LeftPane/LeftPane";
import RightPane from "../../containers/Home/RightPane/RightPane";
import MainFeed from "../../containers/Home/MainFeed/MainFeed";

function Home() {
  return (
    <div className="homeContainer">
      <div className="homeColumn leftPane">
        <LeftPane />
      </div>
      <div className="homeColumn mainFeed">
        <MainFeed />
      </div>
      <div className="homeColumn rightPane">
        <RightPane />
      </div>
    </div >
  )
}

export default Home;
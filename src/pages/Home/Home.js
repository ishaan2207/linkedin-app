import React from "react";
import './Home.css'
import LeftPane from "../../containers/Home/LeftPane/LeftPane";
import RightPane from "../../containers/Home/RightPane/RightPane";

function Home() {
  return (
    <div className="homeContainer">
      <div className="homeColumn leftPane">
        <LeftPane />
      </div>
      <div className="homeColumn rightPane">
        <RightPane />
      </div>
      {/* Homepage =
        Left pane-
          Profile Summary
          Profile Statistics
          Linkedin premium ad
          Bottom left panel
        Main Feed-
          Create post panel
          Sorting posts
          Posts Feed
        Right pane-
          Trending now 
          Promoted page
          Footer */}
    </div>

  )
}

export default Home;
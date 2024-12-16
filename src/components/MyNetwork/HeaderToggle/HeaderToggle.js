import React from "react";
import './HeaderToggle.css';

function HeaderToggle() {
    return (
        <div className="headerToggleContainer">
            <button className="headerGrow">
                Grow
            </button>
            <button className="headerCatchUp">
                Catch up
            </button>
        </div>
    )
}

export default HeaderToggle;
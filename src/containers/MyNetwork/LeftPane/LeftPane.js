import React from "react";
import './LeftPane.css';
import ManageNetwork from "../../../components/MyNetwork/ManageNetwork/ManageNetwork";
import Footer from "../../../components/Footer/Footer";

function LeftPane() {
    return (
        <div>
            <ManageNetwork />
            <Footer />
        </div>
    )
}

export default LeftPane;
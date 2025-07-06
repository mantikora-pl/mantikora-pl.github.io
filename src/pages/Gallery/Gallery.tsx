import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import React from "react";

export default function Gallery(){
    return <div>
        <div className={"stickyTop"}>
            <Header/>
            <Navbar/>
        </div>
        <p>gallery here</p>
    </div>
}
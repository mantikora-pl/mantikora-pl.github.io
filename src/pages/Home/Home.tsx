import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import MyFooter from "../../components/MyFooter";
import React from "react";

export default function Home(){
    return <div>
        <div className={"page"}>
            <Header/>
            <Navbar/>
            <p>home</p>
        </div>
        <MyFooter/>
    </div>
}
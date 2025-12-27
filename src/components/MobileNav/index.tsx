import './style.css'
import {LanguageSelect} from "../LanguageSelect";
import {Link} from "react-router-dom";
import React from "react";
import {navElements} from "../Navbar";

export default function MobileNav(){
    return (
        <div id={"sideMenu"}>
            <div className={"languageSelectContainer"}>
                <LanguageSelect minimize={false}/>
            </div>
            {navElements.map((item,id)=>(
                <div className={"sideItem"} key={id}>
                    <Link to={item.href} className={"link"}>{item.name}</Link>
                </div>
            ))}
        </div>
    )
}
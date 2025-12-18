import React from "react"
import './style.css'
import {getLanguage,getTranslation} from "../../helper/translation"
import {Link} from "react-router-dom";
import {BrowserView} from 'react-device-detect'


export const navElements=[
    {name:getTranslation(getLanguage(),"main"),href:"/"},
    {name:getTranslation(getLanguage(),"news"),href:"/news"},
    {name:getTranslation(getLanguage(),"tour"),href:"/tour"},

    {name:getTranslation(getLanguage(),"discography"),href:"/discography"},
    {name:getTranslation(getLanguage(),"lyrics"),href:"/lyrics"},
    {name:getTranslation(getLanguage(),"history"),href:"/history"},

    //{name:getTranslation(getLanguage(),"gallery"), href:"/gallery"},
    {name:getTranslation(getLanguage(),"band"),href:"/contact"},

    {name:getTranslation(getLanguage(),"merch"),href:"https://www.mantikora-shop.pl"}

]

function Navbar(){
    return (
        <div className={"wrapper"}>
            <BrowserView>
                <header className={"navbar"}>
                    {navElements.map((item,id)=>(
                        <div className={"navbarItem"} key={id}>
                            <Link to={item.href} className={"a"}>{item.name}</Link>
                        </div>
                    ))}
                </header>
            </BrowserView>
        </div>

    )
}

export default Navbar

//<a href={item.href}>{item.name}</a>
import React from "react"
import './style.css'
import {defaultLang,getTranslation} from "../../helper/translation"
import {Link} from "react-router-dom";
import { BrowserView } from 'react-device-detect'

const lang=defaultLang

export const navElements=[
    {name:getTranslation(lang,"main"), href:"/"},
    {name:getTranslation(lang,"news"), href:"/news"},
    {name:getTranslation(lang,"tour"), href:"/tour"},

    {name:getTranslation(lang,"discography"), href:"/discography"},
    {name:getTranslation(lang,"lyrics"), href:"/lyrics"},
    {name:getTranslation(lang,"history"), href:"/history"},

    //{name:getTranslation(lang,"gallery"), href:"/gallery"},
    {name:getTranslation(lang,"band"), href:"/contact"},

    {name:getTranslation(lang,"merch"), href:"https://www.mantikora-shop.pl"}

]

function Navbar(){
    return(
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
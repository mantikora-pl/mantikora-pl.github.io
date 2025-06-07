import React from "react"
import './style.css'
import {defaultLang,getTranslation} from "../../helper/translation"

function Navbar(){
    const lang=defaultLang

    const elements=[
        {name:getTranslation(lang,"main"), href:"/"},
        {name:getTranslation(lang,"news"), href:"/news"},
        {name:getTranslation(lang,"tour"), href:"/tour"},

        {name:getTranslation(lang,"discography"), href:"/discography"},
        {name:getTranslation(lang,"lyrics"), href:"/lyrics"},
        {name:getTranslation(lang,"history"), href:"/history"},

        //{name:getTranslation(lang,"gallery"), href:"/gallery"},
        {name:getTranslation(lang,"contact"), href:"/contact"},

        {name:getTranslation(lang,"merch"), href:"https://www.mantikora-shop.pl"}

    ]


    return(
        <div className={"wrapper"}>
            <header className={"navbar"}>
                {elements.map((item,id)=>(
                    <div className={"navbarItem"} key={id}>
                        <a href={item.href}>{item.name}</a>
                    </div>
                ))}
            </header>
        </div>

    )
}

export default Navbar
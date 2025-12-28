import React from "react"
import './style.css'
import {getLanguage,getTranslation} from "../../helper/translation"
import {Link} from "react-router-dom"
import {BrowserView,MobileView} from 'react-device-detect'
import {useMedia} from 'use-media';
import MobileNav from "../MobileNav";

export const navElements=[
    {name:getTranslation(getLanguage(),"main"),href:"/",shortName:getTranslation(getLanguage(),"main-short")},
    {name:getTranslation(getLanguage(),"news"),href:"/news",shortName:getTranslation(getLanguage(),"news-short")},
    {name:getTranslation(getLanguage(),"tour"),href:"/tour",shortName:getTranslation(getLanguage(),"tour-short")},

    {
        name:getTranslation(getLanguage(),"discography"),
        href:"/discography",
        shortName:getTranslation(getLanguage(),"discography-short")
    },

    {name:getTranslation(getLanguage(),"lyrics"),href:"/lyrics",shortName:getTranslation(getLanguage(),"lyrics-short")},
    {
        name:getTranslation(getLanguage(),"timeline"),
        href:"/timeline",
        shortName:getTranslation(getLanguage(),"timeline-short")
    },

    {
        name:getTranslation(getLanguage(),"aboutus"),
        href:"/aboutus",
        shortName:getTranslation(getLanguage(),"aboutus-short")
    },

    /* {name:getTranslation(getLanguage(),"merch"),href:"https://www.mantikora-shop.pl"}*/

]

function Navbar({sideMenuVisible}:{sideMenuVisible:boolean}){
    const isWide=useMedia({minWidth:'1200px'});


    return (
        <>
            <BrowserView>
                <ul className={"navbar"}>
                    {navElements.map((item,id)=>(
                        <li className={"navbarItem"} key={id}>
                            <Link to={item.href}
                                  className={"a"}>{isWide?item.name:item.shortName}</Link>
                        </li>
                    ))}
                </ul>
            </BrowserView>
            <MobileView>
                {sideMenuVisible?
                    <MobileNav/>:<></>}
            </MobileView>
        </>


    )
}

export default Navbar

//<a href={item.href}>{item.name}</a>
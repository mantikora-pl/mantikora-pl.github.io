import React,{useState} from 'react'
import './style.css'
import { BrowserView, MobileView } from 'react-device-detect'
import {Link} from "react-router-dom";
import {navElements} from "../Navbar";
import {cookies,getLanguage,languagesData} from "../../helper/translation";



function Header(){
    const[sideMenu,setSideMenu]=useState(true)

    function toggleSideMenu(){
        setSideMenu(!sideMenu)
        console.log("switching")
    }
    function handleLanguageChange(event: React.ChangeEvent<HTMLSelectElement>){
        cookies.set("language",event.target.value)
        window.location.reload();
    }

    return(
        <header className={"pageHeader"} >
            <MobileView>
                <div id={"sideMenuWrapper"}>
                    <div>
                    <svg onClick={toggleSideMenu} id={"hamburgerM"} className={"svgM"} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 18 16">
                        {sideMenu?
                            (<path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.50 010 1H1a.5.5 0 01-.5-.5z" fill="currentColor"/>):
                            (<path d="M1.5 1.5L13.5 13.5M1.5 13.5L13.5 1.5" stroke="currentColor"/>
                        )}
                    </svg>
                    </div>
                    {!sideMenu?
                        <div id={"sideMenu"}>
                            {navElements.map((item,id)=>(
                                <div className={"sideItem"} key={id}>
                                    <Link to={item.href} className={"link"}>{item.name}</Link>
                                </div>
                            ))}
                        </div>:<></>}
                </div>
            </MobileView>

            <BrowserView className={"hamburgerW"}>
                <svg id={"hamburgerWIcon"} className={"svg"} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 18 16">
                    <path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="currentColor"/>
                </svg>
            </BrowserView>

            <select
                name={"language"}
                value={getLanguage()}
                onChange={handleLanguageChange}
            >
                {languagesData.map((lang,id)=>(
                    <option key={id} value={lang.code}>{lang.icon} {lang.code}</option>
                ))}
            </select>

            <a href={'/'}>
                <img src="/mantikoraLogo1.png" alt={"logo"} id={"headerLogo"}/>
            </a>

            <BrowserView>
                <svg id={"shoppingCartW"} className={"svg"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16.5" cy="18.5" r="1.5" fill="currentColor"/><circle cx="9.5" cy="18.5" r="1.5" fill="currentColor"/>
                    <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z" fill="currentColor"/>
                </svg>
            </BrowserView>

            <MobileView>
                <svg id={"shoppingCartM"} className={"svgM"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16.5" cy="18.5" r="1.5" fill="currentColor"/><circle cx="9.5" cy="18.5" r="1.5" fill="currentColor"/>
                    <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z" fill="currentColor"/>
                </svg>
            </MobileView>



        </header>
    )
}

export default Header
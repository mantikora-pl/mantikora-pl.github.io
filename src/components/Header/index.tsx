import React,{useEffect} from 'react'
import './style.css'
import {BrowserView,isMobile,MobileView} from 'react-device-detect'
import {Link} from "react-router-dom"
import {LanguageSelect} from "../LanguageSelect";

function Header({sideMenuVisible,setSideMenuVisible}:{sideMenuVisible:boolean,
    setSideMenuVisible:any}){

    function toggleSideMenu(){
        setSideMenuVisible(!sideMenuVisible)
    }

    useEffect(()=>{
        function handleScroll(){
            const elements=document.querySelectorAll('.minimizeOnScroll')
            const elementsVertical=document.querySelectorAll('.minimizeOnScrollVertical')
            if(window.scrollY>65){
                elements.forEach(element=>element.classList.add('smallOnScroll'))
                elementsVertical.forEach(element=>element.classList.add('smallOnScrollVerticalOnly'))
            }
            else if(window.scrollY<40){
                elements.forEach(element=>element.classList.remove('smallOnScroll'))
                elementsVertical.forEach(element=>element.classList.remove('smallOnScrollVerticalOnly'))
            }

        }

        window.addEventListener('scroll',handleScroll)
        return function(){
            window.removeEventListener('scroll',handleScroll)
        }
    },[])


    return (
        <header>

            <BrowserView>
                <div className={"pageHeader minimizeOnScrollVertical"}>
                    <div className={"hamburgerW"}>
                        <svg id={"hamburgerWIcon"} className={"svg"} xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                             focusable="false" fill="none" viewBox="0 0 18 16">
                            <path
                                d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z"
                                fill="currentColor"/>
                        </svg>
                    </div>
                    <div>
                        <LanguageSelect/>
                    </div>
                    <Link to={"/"} className={"logoLink"}>
                        <img src="/mantikoraLogo1.png" alt={"logo"} className={"minimizeOnScroll headerLogo"}/>
                    </Link>
                    <div>
                        <svg id={"shoppingCart"} className={isMobile?"svgM":"svg"} viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16.5" cy="18.5" r="1.5" fill="currentColor"/>
                            <circle cx="9.5" cy="18.5" r="1.5" fill="currentColor"/>
                            <path
                                d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z"
                                fill="currentColor"/>
                        </svg>
                    </div>
                </div>
            </BrowserView>


            <MobileView>
                <div className={"pageHeader"}>
                <div>
                    <svg onClick={toggleSideMenu} id={"hamburgerM"} className={"svgM"}
                         xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" fill="none"
                         viewBox="0 0 18 16">
                        {!sideMenuVisible?
                            (<path
                                d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.50 010 1H1a.5.5 0 01-.5-.5z"
                                fill="currentColor"/>):
                            (<path d="M1.5 1.5L13.5 13.5M1.5 13.5L13.5 1.5" stroke="currentColor"/>
                            )}
                    </svg>
                </div>

                <Link to={"/"} className={"logoLink"}>
                    <img src="/mantikoraLogo1.png" alt={"logo"} className={"headerLogo"}/>
                </Link>

                <div>
                    <svg id={"shoppingCart"} className={isMobile?"svgM":"svg"} viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16.5" cy="18.5" r="1.5" fill="currentColor"/>
                        <circle cx="9.5" cy="18.5" r="1.5" fill="currentColor"/>
                        <path
                            d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z"
                            fill="currentColor"/>
                    </svg>
                </div>
                </div>
            </MobileView>



        </header>
    )
}

export default Header
import React from 'react'
import './style.css'

function Header(){
    return(
        <header className={"pageHeader"} >
            <a href={'/'}>
                <img src="/mantikoraLogo.png" alt={"logo"} id={"headerLogo"}/>
            </a>
        </header>
    )
}

export default Header
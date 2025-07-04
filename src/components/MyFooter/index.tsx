import React from 'react'
import './style.css'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect'


function MyFooter(){
    return(
        <footer>
        Ⓒ2025, MANTIKORA, ALL RIGHTS RESERVED <br/> Powered by
        </footer>
    )
}

export default MyFooter
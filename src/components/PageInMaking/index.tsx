import React from 'react'
import './style.css'
import {defaultLang,getTranslation} from "../../helper/translation";

function PageInMaking(){
    return(
        <p className={"pageInMaking"}>{getTranslation(defaultLang,"page-in-making")}</p>
    )
}

export default PageInMaking
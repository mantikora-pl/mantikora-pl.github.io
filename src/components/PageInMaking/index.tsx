import React from 'react'
import './style.css'
import {getLanguage,getTranslation} from "../../helper/translation"

function PageInMaking(){
    return (
        <p className={"pageInMaking"}>{getTranslation(getLanguage(),"page-in-making")}</p>
    )
}

export default PageInMaking
import React from 'react'
import './style.css'
import NewLineToBr from "../NewLineToBr";
import {getLanguage,getTranslation} from "../../helper/translation";

export function AboutUsText(){
    return(
        <div className={"aboutUsTextWrapper"}>
            <NewLineToBr>
                {getTranslation(getLanguage(),"aboutUsText")}
            </NewLineToBr>
        </div>
    )
}

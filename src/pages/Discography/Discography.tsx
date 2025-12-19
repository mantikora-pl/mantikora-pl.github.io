import DiscList from "../../components/DiscList"
import DiscListM from "../../components/DiscListM"
import {getLanguage,getTranslation} from "../../helper/translation"
import React from "react"
import {BrowserView,MobileView} from "react-device-detect"
import {discsData_real, discsData_mock} from "../../data/discsData"
import {mock} from "../../data/mock"

export default function Discography(){
    const discsData=(mock)?discsData_mock:discsData_real
    return <div className={"innerPage gradientBackground"}>
        <p className={"pageTitle"}>{getTranslation(getLanguage(),"our-cds")}</p>
        <MobileView>
            <DiscListM items={discsData}/>
        </MobileView>
        <BrowserView>
            <DiscList items={discsData}/>
        </BrowserView>
    </div>

}
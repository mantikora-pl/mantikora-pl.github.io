import DiscList from "../../components/DiscList";
import DiscListM from "../../components/DiscListM";
import {getLanguage,getTranslation} from "../../helper/translation";
import React from "react";
import {BrowserView,MobileView} from "react-device-detect";
import {discsData1 as discsData} from "../../data/discsData";


export default function Discography(){
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
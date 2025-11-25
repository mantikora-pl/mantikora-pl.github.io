import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import DiscList,{Disc} from "../../components/DiscList";
import DiscListM from "../../components/DiscListM";
import {getLanguage,getTranslation} from "../../helper/translation";
import MyFooter from "../../components/MyFooter";
import React from "react";
import {BrowserView,MobileView} from "react-device-detect";
import PageInMaking from "../../components/PageInMaking";
import {discsData} from "../../data/discsData";


export default function Discography(){
    return <div>
        <div className={"page"}>
            <div className={"stickyTop"}>
                <Header/>
                <Navbar/>
            </div>
            <PageInMaking/>
            <p className={"pageTitle"}>{getTranslation(getLanguage(),"our-cds")}</p>
            <MobileView>
                <DiscListM items={discsData}/>
            </MobileView>
            <BrowserView>
                <DiscList items={discsData}/>
            </BrowserView>
        </div>
        <MyFooter/>
    </div>

}
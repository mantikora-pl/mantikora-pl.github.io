import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import DiscList,{Disc} from "../../components/DiscList";
import DiscListM from "../../components/DiscListM";
import {defaultLang,getTranslation} from "../../helper/translation";
import MyFooter from "../../components/MyFooter";
import React from "react";
import {BrowserView,MobileView} from "react-device-detect";
import PageInMaking from "../../components/PageInMaking";

const single=" ("+getTranslation(defaultLang,"single")+")"

const discs:Disc[]=[
    {
        title:"TBA",
        date:"XX.XX.2026",
        coverArtSrc:"https://picsum.photos/500?random=3",
        songs:[
            "Parasite",
            "Potop biblijny",
            "Nie ma nic po śmierci lol",
            "Ballada o chujwieczym",
            "Intro jako osobny utwór",
            "Gułagi",
            "Organy",
            "Dziwne odłogsy",
            "Mantikora (chimera blood)",
            "A Dream about War, I Saw"
        ],
        credits:""
    },
    {
        title:"M.I.N.D",
        date:"XX.XX.2026",
        coverArtSrc:"/mind.png",
        songs:[
            "Devil's Mouth"+single,
            "Davy Jones's Locker",
            "Anima Sola"+single,
            "Herxheim",
            "The Hanged Man XII",
            "Judgement XX",
            "Vanitas"+single,
            "Kompania",
            "MIND"+single,
        ],
        credits:getTranslation(defaultLang,"writtenByEveryone")
    },
    {
        title:"Devil's Mouth - demo",
        date:"XX.12.2025",
        coverArtSrc:"/devilsMouth.png",
        songs:[
            "Devil's Mouth",
            "Vanitas",
            "Kompania",
            "MIND",
        ],
        credits:getTranslation(defaultLang,"writtenByEveryone")
    },
]

export default function Discography(){
    return <div>
        <div className={"page"}>
            <div className={"stickyTop"}>
                <Header/>
                <Navbar/>
            </div>
            <PageInMaking/>
            <p className={"pageTitle"}>{getTranslation(defaultLang,"our-cds")}</p>
            <MobileView>
                <DiscListM items={discs}/>
            </MobileView>
            <BrowserView>
                <DiscList items={discs}/>
            </BrowserView>
        </div>
        <MyFooter/>
    </div>

}
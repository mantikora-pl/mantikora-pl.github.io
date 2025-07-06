import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import DiscList,{Disc} from "../../components/DiscList";
import DiscListM from "../../components/DiscListM";
import {defaultLang,getTranslation} from "../../helper/translation";
import MyFooter from "../../components/MyFooter";
import React from "react";
import {BrowserView,MobileView} from "react-device-detect";

const single=" ("+getTranslation(defaultLang,"single")+")"

const discs:Disc[]=[
    {
        title:"TBA",
        date:"XX.XX.2026",
        coverArtSrc:"https://picsum.photos/500?random=3",
        songs:[
            "Parasite",
            "Ballada o chujwieczym",
            "Potop biblijny",
            "Intro jako osobny utwór",
            "Gułagi",
            "Organy",
            "Nie ma nic po śmierci lol",
            "Dziwne odłogsy",
            "Mantikora (chimera blood)",
            "A Dream about War, I Saw"
        ],
        credits:""
    },
    {
        title:"M.I.N.D",
        date:"XX.XX.2025",
        coverArtSrc:"https://picsum.photos/500?random=2",
        songs:[
            "Devil's Mouth"+single,
            "Davy Jones's Locker",
            "Vanitas"+single,
            "Koszmary"+single,
            "Kompania",
            "The Hanged Man XII",
            "Judgement XX",
            "Herxheim",
            "Dead God"+single
        ],
        credits:"Written by the whole band"
    },
    {
        title:"M.I.N.D DEMO",
        date:"??.??.2025",
        coverArtSrc:"https://picsum.photos/500?random=1",
        songs:[
            "Devil's Mouth",
            "Vanitas",
            "Koszmary",
            "Kompania",
            "Herxheim (?)",
            "Dead God (?)"
        ],
        credits:"Written by the whole band"
    },
]

export default function Discography(){
    return <div>
        <div className={"page"}>
            <div className={"stickyTop"}>
                <Header/>
                <Navbar/>
            </div>
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
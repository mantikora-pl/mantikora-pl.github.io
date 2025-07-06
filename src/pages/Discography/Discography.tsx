import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import DiscList,{Disc} from "../../components/DiscList";
import {defaultLang,getTranslation} from "../../helper/translation";
import MyFooter from "../../components/MyFooter";
import React from "react";

const discs:Disc[]=[
    {
        title:"Devil's Mouth (Single)",
        date:"??.07.2025",
        coverArtSrc:"https://picsum.photos/500?random=1",
        songs:[
            "Devil's Mouth"
        ],
        credits:""
    },
    {
        title:"Vanitas (Single)",
        date:"??.07.2025",
        coverArtSrc:"https://picsum.photos/500?random=2",
        songs:[
            "Vanitas"
        ],
        credits:""
    },
    {
        title:"M.I.N.D",
        date:"??.??.2025",
        coverArtSrc:"https://picsum.photos/500?random=3",
        songs:[
            "Devil's Mouth",
            "Davy Jones's Locker",
            "Vanitas",
            "Koszmary",
            "Kompania",
            "The Hanged Man XII",
            "Judgement XX",
            "Herxheim",
            "Dead God"
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
            <DiscList items={discs}/>
        </div>
        <MyFooter/>
    </div>

}
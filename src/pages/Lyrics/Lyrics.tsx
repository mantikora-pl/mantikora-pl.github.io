import LyricsItem,{LyricsItems} from "../../components/LyricsItem";
import React from "react";
import {getLanguage,getTranslation} from "../../helper/translation";
import {HashLink as Link} from 'react-router-hash-link';
import ScrollToTop from "react-scroll-to-top";
import {lyricsConst} from "../../data/lyrics";
//import {secretLyricsConst as lyricsConst} from "../../data/lyrics_secret";

const lyricsToUse:string[]=lyricsConst

const lyrics:LyricsItems[]=[
    {
        id:1,
        name:"Devil's Mouth",
        lyrics:lyricsToUse[0],
        credits:"",
    },
    {
        id:2,
        name:"Davy Jones's Locker",
        lyrics:lyricsToUse[1],
        credits:"",
    },
    {
        id:3,
        name:"Vanitas",
        lyrics:lyricsToUse[2],
        credits:"",
    },
    {
        id:4,
        name:"MIND",
        lyrics:lyricsToUse[3],
        credits:"",
    },
    /*{
        id:5,
        name:"źołnierze",
        lyrics:"Coming soon",
        credits:"",
        visible:true
    },
    {
        id:6,
        name:"Herxheim",
        lyrics:"Coming soon",
        credits:"",
        visible:true
    },
    {
        id:7,
        name:"Anima Sola",
        lyrics:"Coming soon",
        credits:"",
        visible:true
    },*/

]
const lyricsR=lyrics.reverse()
//const length=lyricsR.length
export default function Lyrics(){

    return <div id={"lyricsPage"} className={"innerPage"}>
        <div id={"lyricsImageBG"}>
            <p className={"pageTitle"}>{getTranslation(getLanguage(),"lyrics")}</p>
            <main id={"lyricsPageIn"}>
                <aside id={"songListAside"}>
                    <ul id={"songList"}>
                        <section>
                            {Array.from({length:lyrics.length},(_,i)=>
                                <span key={i}>
                                    <li>
                                        <Link to={"/lyrics/#header"+i}>
                                            {lyricsR?.at(i)?.name}</Link>
                                    </li>
                                </span>
                            )}
                        </section>
                    </ul>
                </aside>

                <div id={"lyricsContainer"}>
                    <LyricsItem items={lyricsR}/>
                </div>

            </main>
            <ScrollToTop/>
        </div>
    </div>
}
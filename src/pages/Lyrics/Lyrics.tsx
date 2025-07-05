import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import LyricsItem,{LyricsItems} from "../../components/LyricsItem";
import {lyricsConst} from "../../helper/lyrics";
import MyFooter from "../../components/MyFooter";
import React from "react";
import {defaultLang,getTranslation} from "../../helper/translation";
import {HashLink as Link} from 'react-router-hash-link';

const lyrics:LyricsItems[]=[
    {
        id:1,
        name:"Devil's Mouth",
        lyrics:lyricsConst[0],
        credits:"",
        visible:true
    },
    {
        id:2,
        name:"Davy Jones's Locker",
        lyrics:lyricsConst[1],
        credits:"",
        visible:true
    },
    {
        id:3,
        name:"Śmierć w szpitalu",
        lyrics:"Coming soon",
        credits:"",
        visible:true
    },
    {
        id:4,
        name:"Żołnierze",
        lyrics:"Coming soon",
        credits:"",
        visible:true
    },

]
const lyricsR=lyrics.reverse()
//const length=lyricsR.length
export default function Lyrics(){

    return <div id={"lyricsPage"}>
        <div className={"page"}>
        <div className={"stickyTop"}>
            <Header/>
            <Navbar/>
        </div>
        <p className={"pageTitle"}>{getTranslation(defaultLang,"lyrics")}</p>
        <main>
            <aside id={"songListAside"}>
                <ul id={"songList"}>
                    <section>
                        {Array.from({length:lyrics.length},(_,i)=>
                            <span key={i}>
                                {lyricsR?.at(i)?.visible===true&&
                                <li>
                                    <Link to={"/lyrics/#header"+i}>
                                        {lyricsR?.at(i)?.name}</Link>
                                </li>
                                }
                            </span>
                        )}
                    </section>
                </ul>
            </aside>
            <LyricsItem items={lyricsR}/>
        </main>
        <MyFooter/>
        </div>
    </div>
}
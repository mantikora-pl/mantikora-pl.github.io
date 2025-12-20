import LyricsItem from "../../components/LyricsItem"
import React from "react"
import {getLanguage,getTranslation} from "../../helper/translation"
import {HashLink as Link} from 'react-router-hash-link'
import ScrollToTop from "react-scroll-to-top"
import {songs} from "../../data/lyrics"
const songsR=songs.reverse()

export default function Lyrics(){
    return <div id={"lyricsPage"} className={"innerPage gradientBackground backgroundFade"}>
        <div id={"lyricsImageBackground"} className={"skullBackground"}>
            <p className={"pageTitle"}>{getTranslation(getLanguage(),"lyrics")}</p>
            <main id={"lyricsPageIn"}>
                <aside id={"songListContainer"}>
                    <ul id={"songList"}>
                        <section>
                            {Array.from({length:songs.length},(_,i)=>
                                <span key={i}>
                                    <li>
                                        <Link to={"/lyrics/#header"+i}>
                                            {songsR?.at(i)?.name}</Link>
                                    </li>
                                </span>
                            )}
                        </section>
                    </ul>
                </aside>

                <div id={"lyricsContainer"}>
                    <LyricsItem items={songsR}/>
                </div>

            </main>
            <ScrollToTop/>
        </div>
    </div>
}
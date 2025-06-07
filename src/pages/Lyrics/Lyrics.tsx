import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import LyricsItem,{LyricsItems} from "../../components/LyricsItem";
import {lyricsConst} from "../../helper/lyrics";

const lyrics:LyricsItems[]=[
    {
        id:1,
        name:"Devil's Mouth",
        lyrics:lyricsConst[0],
        credits:"",
        visible:false
    },
    {
        id:2,
        name:"Davy Jones's Locker",
        lyrics:lyricsConst[1],
        credits:""
    },
    {
        id:3,
        name:"Śmierć w szpitalu",
        lyrics:"Coming soon",
        credits:""
    },
    {
        id:4,
        name:"Żołnierze",
        lyrics:"Coming soon",
        credits:""
    },

]
const lyricsR=lyrics.reverse()
//const length=lyricsR.length
export default function Lyrics(){
    return <div id={"lyricsPage"}>
        <Header/>
        <Navbar/>
        <h1 className={"pageTitle"}>Lyrics</h1>
        <main>
            <aside id={"songListAside"}>
                <ul id={"songList"}>
                    <section>
                        {Array.from({length:lyrics.length},(_,i)=>
                            <span key={i}>
                                {lyricsR?.at(i)?.visible===true&&
                                <li>
                                    <a href={"/lyrics#header"+i}>
                                        {lyricsR?.at(i)?.name}
                                    </a>
                                </li>
                                }
                            </span>
                        )}
                    </section>
                </ul>
            </aside>
            <LyricsItem items={lyricsR}/>
        </main>
    </div>
}
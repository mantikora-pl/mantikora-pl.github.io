import React from 'react'
import './style.css'
import NewLineToBr from "../NewLineToBr";

export interface LyricsItems{
    id:number,
    name:string,
    lyrics:string,
    credits?:string,
    visible?:boolean
}

function LyricsItem({items}:{items: LyricsItems[]}){

    return(
        <>
            {items.map((item,i)=>(
                <div key={i}>
                    <h2 className={"songLyricsHeader"} id={"header"+i}>{item.name}</h2>
                    <p className={"songLyrics"}>
                        <NewLineToBr>{item.lyrics}</NewLineToBr>
                    </p>
                    <p className={"songLyricsCredits"}>{item.credits}</p>
                </div>
            ))}
        </>
    )
}

export default LyricsItem
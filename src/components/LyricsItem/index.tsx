import React,{useState} from 'react'
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
    const [visibleIndex,setVisibleIndex]=useState<number[]>(Array.from({length:items.length},(_,i)=>i))


    return(
        <>
            {items.map((item,i)=>(
                <div key={i} className={"lyricsItemWrapper"}>
                    <p className={"anchor"} id={"header"+i}/>
                    <div className={"lyricsTitleRow"}>
                        <h2 className={"songLyricsHeader"} >{item.name}</h2>
                        <svg className={"lyricsClose"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                             onClick={()=>setVisibleIndex(visibleIndex.includes(i)?visibleIndex.filter(index=>index!==i):[...visibleIndex,i])}>
                            <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" stroke={"currentColor"}/></svg>
                    </div>
                    {visibleIndex.includes(i)&&(
                        <p className={"songLyrics"}>
                            <NewLineToBr>{item.lyrics}</NewLineToBr>
                        </p>
                    )}
                    <p className={"songLyricsCredits"}>{item.credits}</p>
                </div>
            ))}
        </>
    )
}

export default LyricsItem
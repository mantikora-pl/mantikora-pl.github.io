import React,{useState} from 'react'
import './style.css'
import NewLineToBr from "../NewLineToBr";

export interface LyricsItems{
    id:number,
    name:string,
    lyrics:string,
    credits?:string,
}

function LyricsItem({items}:{items:LyricsItems[]}){
    const [visibleIndex,setVisibleIndex]=useState<number[]>(Array.from({length:items.length},(_,i)=>i))


    return (
        <>
            {items.map((item,i)=>(
                <div key={i} className={"songLyricsContainer"}>
                    <p className={"anchor"} id={"header"+i}/>
                    <div className={"songLyricsHeader"}>
                        <h2 className={"songTitle"}>{item.name}</h2>
                        <svg className={"closeIcon"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                             onClick={()=>setVisibleIndex(visibleIndex.includes(i)?visibleIndex.filter(index=>index!==i):[...visibleIndex,i])}>
                            <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" stroke={"currentColor"}/>
                        </svg>
                    </div>
                    {visibleIndex.includes(i)&&(
                        <p className={"lyricsText"}>
                            <NewLineToBr>{item.lyrics}</NewLineToBr>
                        </p>
                    )}
                    <p className={"songCredits"}>{item.credits}</p>
                </div>
            ))}
        </>
    )
}

export default LyricsItem
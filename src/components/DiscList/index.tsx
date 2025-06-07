import React from 'react'
import './style.css'

export interface Disc{
    credits?:string,
    title:string,
    date:string,
    coverArtSrc:string,
    songs:string[]
}
function getCssClass(index:number){
    if(index%2===0) return "discWrapperLeft"

    return "discWrapperRight"
}

function DiscList({items}:{items: Disc[]}){
    return(
        <div className={"listWrapper"}>
            {items.map((item,i)=>(
                <div className={getCssClass(i)} key={i}>
                    <img src={item.coverArtSrc} alt={"random pic"} className={"coverArt"}/>
                    <div className={"albumDetailsWrapper"}>
                        <p className={"albumTitle"}>{item.title}</p>
                        <p className={"albumDate"}>{item.date}</p>
                        <ol>
                            {item.songs.map((song,j)=>(
                                <li key={j} className={"songLi"}>{song}</li>
                            ))}
                        </ol>
                        <p className={"albumCredits"}>{item.credits}</p>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default DiscList
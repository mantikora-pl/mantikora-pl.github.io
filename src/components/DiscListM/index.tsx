import React from 'react'
import './style.css'

export interface Disc{
    credits?:string,
    title:string,
    date:string,
    coverArtSrc:string,
    songs:string[]
}

function DiscListM({items}:{items:Disc[]}){
    return (
        <div className={"listWrapperM"}>
            {items.map((item,i)=>(
                <div>
                    <div className="discWrapperM" key={i}>
                        <img src={item.coverArtSrc} alt={"random pic"} className={"coverArtM"}/>

                        <div className={"albumDetailsWrapperM"}>
                            <p className={"albumTitleM"}>{item.title}</p>
                            <p className={"albumDateM"}>{item.date}</p>
                            <ol>
                                {item.songs.map((song,j)=>(
                                    <li key={j} className={"songM"}>{song}</li>
                                ))}
                            </ol>
                            <p className={"albumCreditsM"}>{item.credits}</p>
                        </div>
                    </div>
                    <hr/>
                </div>
            ))}
        </div>
    )
}

//TODO: WHOLE NEW FUNCTION FOR MOBILE!!!
export default DiscListM
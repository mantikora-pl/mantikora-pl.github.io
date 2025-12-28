import React,{useEffect} from 'react'
import './style.css'
import {Disc} from "../../data/discsData";

function DiscListM({items}:{items:Disc[]}){

    useEffect(()=>{
        const observer=new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    if(entry.target.classList.contains('discWrapperM')){
                        entry.target.classList.add(Math.random()<0.5?'flyInLeftAnimation':'flyInRightAnimation')
                    }
                    observer.unobserve(entry.target)
                }
            })
        })

        const elements=document.querySelectorAll('.discWrapperM')
        elements.forEach((element)=>observer.observe(element))

        return ()=>{
            elements.forEach((element)=>observer.unobserve(element))
        }
    },[])

    return (
        <div className={"listWrapperM"}>
            {items.map((item,i)=>(
                <div>
                    <div className="discWrapperM" key={i}>
                        <img src={item.coverArtSrc??"placeholder.webp"} alt={"album cover art"} className={"coverArtM"}/>

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
                </div>
            ))}
        </div>
    )
}

//TODO: WHOLE NEW FUNCTION FOR MOBILE!!!
export default DiscListM
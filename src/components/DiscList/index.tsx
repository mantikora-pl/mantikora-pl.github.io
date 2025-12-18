import React,{useEffect} from 'react'
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

function DiscList({items}:{items:Disc[]}){
    useEffect(()=>{
        const observer=new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    if(entry.target.classList.contains('discWrapperLeft')){
                        entry.target.classList.add('flyInLeftAnimation');
                    }
                    else if(entry.target.classList.contains('discWrapperRight')){
                        entry.target.classList.add('flyInRightAnimation');
                    }
                    observer.unobserve(entry.target);
                }
            });
        });

        const elementsL=document.querySelectorAll('.discWrapperLeft');
        const elementsR=document.querySelectorAll('.discWrapperRight');

        elementsL.forEach((element)=>observer.observe(element));
        elementsR.forEach((element)=>observer.observe(element));

        return ()=>{
            elementsL.forEach((element)=>observer.unobserve(element));
            elementsR.forEach((element)=>observer.unobserve(element));
        }
    },[]);


    return (
        <div className={"listContainer"}>
            {items.map((item,i)=>(
                <div className={getCssClass(i)} key={i}>
                    <img src={item.coverArtSrc} alt={"random pic"} className={"coverArt"}/>
                    <div className={"albumDetailsWrapper"}>
                        <p className={"albumTitle"}>{item.title}</p>
                        <p className={"albumDate"}>{item.date}</p>
                        <ol>
                            {item.songs.map((song,j)=>(
                                <li key={j} className={"song"}>{song}</li>
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
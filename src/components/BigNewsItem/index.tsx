import React from 'react'
import './style.css'
import NewLineToBr from "../NewLineToBr";

export interface NewsI{
    photoSrc:string,
    date:string,
    title:string,
    content:string,
}

function BigNewsItem({item}:{item: NewsI}){
    return(
        <div className={"listWrapper"}>
            <div className={"newsItemWrapperB"}>
                <img className={"newsImageB"} src={item.photoSrc} alt={item.title+" image"}/>
                <div className={"newsDetailsWrapperB"}>
                    <p className={"newsTitleB"}>{item.title}</p>
                    <p className={"newsDateB"}>{item.date}</p>
                    <p className={"newsContentB"}><NewLineToBr>{item.content}</NewLineToBr></p>
                </div>
            </div>
        </div>
    )
}

export default BigNewsItem
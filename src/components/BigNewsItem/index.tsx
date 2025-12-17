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
        <div className={"bigNewsContainer"}>
            <div className={"bigNewsItemWrapper"}>
                <div className={"bigNewsImageWrapper"}>
                    <img className={"bigNewsImage"} src={item.photoSrc} alt={item.title+" image"}/>
                </div>
                <div className={"bigNewsDetailsWrapper"}>
                    <p className={"bigNewsTitle"}>{item.title}</p>
                    <p className={"bigNewsDate"}>{item.date}</p>
                    <p className={"bigNewsContent"}><NewLineToBr>{item.content}</NewLineToBr></p>
                </div>
            </div>
        </div>
    )
}

export default BigNewsItem
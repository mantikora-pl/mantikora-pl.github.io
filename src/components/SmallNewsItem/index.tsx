import React from 'react'
import './style.css'
import NewLineToBr from "../NewLineToBr";
import {NewsI} from "../BigNewsItem"; //todo: move


function SmallNewsItem({item}:{item: NewsI}){
    return(
        <div className={"smallNewsContainer"}>
            <div className={"smallNewsItemWrapper"}>
                <div className={"smallNewsImageWrapper"}>
                    <img className={"smallNewsImage"} src={item.photoSrc} alt={item.title+" image"}/>
                </div>
                <div className={"smallNewsDetailsWrapper"}>
                    <p className={"smallNewsTitle"}>{item.title}</p>
                    <p className={"smallNewsDate"}>{item.date}</p>
                    <p className={"smallNewsContent"}><NewLineToBr>{item.content}</NewLineToBr></p>
                </div>
            </div>
        </div>
    )
}

export default SmallNewsItem
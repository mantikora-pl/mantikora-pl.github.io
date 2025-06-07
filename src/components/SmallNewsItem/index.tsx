import React from 'react'
import './style.css'
import NewLineToBr from "../NewLineToBr";
import {NewsI} from "../BigNewsItem";


function SmallNewsItem({item}:{item: NewsI}){
    return(
        <div className={"listWrapper"}>
            <div className={"newsItemWrapperS"}>
                <img className={"newsImageS"} src={item.photoSrc} alt={item.title+" image"}/>
                <div className={"newsDetailsWrapperS"}>
                    <p className={"newsTitleS"}>{item.title}</p>
                    <p className={"newsDateS"}>{item.date}</p>
                    <p className={"newsContentS"}><NewLineToBr>{item.content}</NewLineToBr></p>
                </div>
            </div>
        </div>
    )
}

export default SmallNewsItem
import React from 'react'
import './style.css'
import NewLineToBr from "../NewLineToBr"
import {NewsI} from "../../data/newsData";


function BigNewsItem({item}:{item:NewsI}){
    return (
        <div className={"bigNewsContainer"}>
            <div className={"bigNewsItemContainer"}>
                <div className={"bigNewsImageWrapper"}>
                    <img className={"bigNewsImage"} src={item.photoSrc} alt={item.title+" image"}/>
                </div>
                <div className={"bigNewsDetailsWrapper"}>
                    <p className={"bigNewsTitle"}>{item.title}</p>
                    <p className={"bigNewsDate"}>{item.date}</p>
                    <p className={"bigNewsDescription"}>
                        <NewLineToBr>{item.content}</NewLineToBr>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BigNewsItem
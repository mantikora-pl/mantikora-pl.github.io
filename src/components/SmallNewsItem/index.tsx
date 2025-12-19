import React from 'react'
import './style.css'
import NewLineToBr from "../NewLineToBr"
import {NewsI} from "../../data/newsData";


function SmallNewsItem({item,cssClass}:{item:NewsI,cssClass?:string}){
    return (
        <div className={"smallNewsContainer"+(cssClass?cssClass:"")}>
            <div className={"smallNewsItemContainer"}>
                <div className={"smallNewsImageWrapper"}>
                    <img className={"smallNewsImage"} src={item.photoSrc} alt={item.title+" image"}/>
                </div>
                <div className={"smallNewsDetailsWrapper"}>
                    <p className={"smallNewsTitle"}>{item.title}</p>
                    <p className={"smallNewsDate"}>{item.date}</p>
                    <p className={"smallNewsDescription"}><NewLineToBr>{item.content}</NewLineToBr></p>
                </div>
            </div>
        </div>
    )
}

export default SmallNewsItem
import React from 'react'
import './style.css'
import NewLineToBr from "../NewLineToBr"
import {NewsI} from "../../data/newsData";
import {localizeDate} from "../../helper/date";
import {Link} from "react-router-dom";


function SmallNewsItem({item,cssClass}:{item:NewsI,cssClass?:string}){
    return (
        <div className={"smallNewsContainer"+(cssClass?cssClass:"")}>
            <div className={"smallNewsItemContainer"}>
                <div className={"smallNewsImageWrapper"}>
                    <img className={"smallNewsImage"} src={item.photoSrc} alt={item.title+" image"}/>
                </div>
                <div className={"smallNewsDetailsWrapper"}>
                    <Link className={"smallNewsTitle"} to={`/article/${item.id}`}>{item.title}</Link>
                    <p className={"smallNewsDate"}>{localizeDate(item.year,item.month,item.day)}</p>
                    <p className={"smallNewsDescription"}><NewLineToBr>{item.content}</NewLineToBr></p>
                </div>
            </div>
        </div>
    )
}

export default SmallNewsItem
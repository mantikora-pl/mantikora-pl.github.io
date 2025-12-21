import React from 'react'
import './style.css'
import NewLineToBr from "../NewLineToBr"
import {NewsI} from "../../data/newsData";
import {localizeDate} from "../../helper/date";
import {Link} from "react-router-dom";


function BigNewsItem({item}:{item:NewsI}){
    return (
        <div className={"bigNewsContainer"}>
            <div className={"bigNewsItemContainer"}>
                <div className={"bigNewsImageWrapper"}>
                    <img className={"bigNewsImage"} src={item.photoSrc} alt={item.title+" image"}/>
                </div>
                <div className={"bigNewsDetailsWrapper"}>
                    <Link className={"bigNewsTitle"} to={`/article/${item.id}`}>{item.title}</Link>
                    <p className={"bigNewsDate"}>{localizeDate(item.year,item.month,item.day)}</p>
                    <p className={"bigNewsDescription"}>
                        <NewLineToBr>{item.content}</NewLineToBr>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BigNewsItem
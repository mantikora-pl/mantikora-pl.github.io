import React from 'react'
import './style.css'
import {Concert,LocationDisclaimer} from "../ConcertItem"
import {localizeDate} from "../../helper/date"
import {getLanguage,getTranslation} from "../../helper/translation";
import {getColor} from "../../helper/getColor";
import {FoundEnum} from "../../helper/findCity";
import {stateNameToCode} from "../../helper/constants";

function ConcertItemM({item,showDistance=false}:{item:Concert,showDistance?:boolean}){
    const distance=(getLanguage()==="en"&&navigator.language==="en-US")?item.distanceMi+" mi":item.distanceKm+" km"
    const color=getColor(item.distanceKm)
    if(item.found===FoundEnum.NOT_FOUND) showDistance=false
    const location=(item.country==="US")?`${item.city} (${stateNameToCode(item.state)})`:item.city

    function unifiedDate(){
        return localizeDate(item.numericDate.year,item.numericDate.month,item.numericDate.day)
    }

    function generateFlagClassName(code:string):string{
        return "concertDateM fi fi-"+code.toLowerCase()
    }


    return (
        <div className={"concertItemM"}>
            <div className={"concertRowM"}>
                <div className={"concertLeftM"}>
                    <p className={"concertDateTextM"}>{unifiedDate()}</p>
                    <p className={"concertNameM"}>{item.name}</p>
                    {showDistance?
                        <div className={"distanceDaysCell"} style={{color}}>{distance}</div>:
                        <div className={"distanceDaysCell"}>{item.daysToEvent+getTranslation(getLanguage(),"daysLeft")}</div>
                    }
                </div>
                <div className={"concertRightM"}>
                    <p className={"concertLocationM"}>{location}</p>
                    <div className={generateFlagClassName(item.country??"us")}/>
                </div>
            </div>

            <a href={item.buyLink}>
                <button className={"ticketsButtonM"}>Tickets</button>
            </a>
        </div>
    )
}

export default ConcertItemM
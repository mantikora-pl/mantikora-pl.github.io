import React from 'react'
import './style.css'
import {Concert} from "../ConcertItem";
import {localizeDate} from "../../helper/date";

function ConcertItemM({item}:{item: Concert}){
    function unifiedDate(){
        return localizeDate(item.numericDate.year,item.numericDate.month,item.numericDate.day)
    }

    function generateFlagClassName(code:string):string{
        return "concertDateM fi fi-"+code.toLowerCase()
    }

    return(
        <div className={"concertItemM"}>
            <div className={"concertRowM"}>
                <div className={"concertLeftM"}>
                    <p className={"concertDateTextM"}>{unifiedDate()}</p>
                    <p className={"concertNameM"}>{item.name}</p>
                </div>
                <div className={"concertRightM"}>
                    <p className={"concertLocationM"}>{item.city}</p>
                    <div className={generateFlagClassName(item.country??"us")}/>
                </div>
            </div>

            <a href={item.buyLink}><button className={"ticketsButtonM"}>Tickets</button></a>
        </div>
    )
}

export default ConcertItemM
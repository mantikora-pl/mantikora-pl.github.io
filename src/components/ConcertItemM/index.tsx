import React from 'react'
import './style.css'
import {defaultLang} from "../../helper/translation";
import concertItem,{Concert, Concert_Old} from "../ConcertItem";

function ConcertItemM({items}:{items: Concert}){
    function unifiedDate(){
        return(items.date.day+' '+items.date.month+' '+items.date.year)
    }
    function unifiedDateUS(){
        return(items.date.month+' '+items.date.day+' '+items.date.year)
    }

    return(
        <div className={"concertItemM"}>
            <div className={"concertRowM"}>
                <div className={"concertLeftM"}>
                    {defaultLang==="en" &&
                        <div className={"concertDateM"}>
                            <p className={"concertDateTextM"}>{unifiedDate()}</p>
                        </div>
                    }
                    {defaultLang!=="en" &&
                        <div className={"concertDateM"}>
                            <p className={"concertDateTextM"}>{unifiedDateUS()} </p>
                        </div>
                    }
                    <p className={"concertNameM"}>{items.name}</p>
                </div>
                <p className={"concertLocationM"}>{items.city}</p>
            </div>

            <a href={items.buyLink}><button className={"ticketsButtonM"}>Tickets</button></a>
        </div>
    )
}

export default ConcertItemM
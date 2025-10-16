import React from 'react'
import './style.css'
import {Concert} from "../ConcertItem";

function ConcertItemM({items}:{items: Concert}){
    function unifiedDate(){
        return(items.date.day+' '+items.date.month+' '+items.date.year)
    }

    return(
        <div className={"concertItemM"}>
            <div className={"concertRowM"}>
                <div className={"concertLeftM"}>
                        <div className={"concertDateM"}>
                            <p className={"concertDateTextM"}>{unifiedDate()}</p>
                        </div>
                    <p className={"concertNameM"}>{items.name}</p>
                </div>
                <p className={"concertLocationM"}>{items.city}</p>
            </div>

            <a href={items.buyLink}><button className={"ticketsButtonM"}>Tickets</button></a>
        </div>
    )
}

export default ConcertItemM
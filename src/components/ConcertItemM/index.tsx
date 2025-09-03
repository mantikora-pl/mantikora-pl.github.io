import React from 'react'
import './style.css'
import {defaultLang} from "../../helper/translation";
import concertItem from "../ConcertItem";
export interface Concert{
    year:string
    month:string
    day:string
    name:string
    location:string
    buyLink:string
    visible:boolean
}
/**name is also club! location is only city+country **/
function ConcertItemM({items}:{items: Concert}){
    function unifiedDate(){
        return(items.day+' '+items.month+' '+items.year)
    }
    function unifiedDateUS(){
        return(items.month+' '+items.day+' '+items.year)
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
                            <p className={"concertDateTextM"}>{items.day} {items.month} {items.year}</p>
                        </div>
                    }
                    <p className={"concertNameM"}>{items.name}</p>
                </div>
                <p className={"concertLocationM"}>{items.location}</p>
            </div>

            <a href={items.buyLink}><button className={"ticketsButtonM"}>Tickets</button></a>
        </div>
    )
}

export default ConcertItemM
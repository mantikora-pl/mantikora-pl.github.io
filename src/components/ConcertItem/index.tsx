import React from 'react'
import './style.css'
interface concertItem{
    year:string
    month:string
    day:string
    name:string
    location:string
    buyLink:string
}
/**name is also club! location is only city+country **/
function ConcertItem({items}:{items: concertItem}){
    return(
        <div className={"concertRow"}>
            <div className={"concertDate"}>
                <div className={"concertMonth"}>{items.month}</div>
                <div className={"concertDay"}>{items.day}</div>
                <div className={"concertYear"}>{items.year}</div>
            </div>
            <p className={"concertName"}>{items.name}</p>
            <p className={"concertLocation"}>{items.location}</p>
            <a href={items.buyLink}><button className={"ticketsButton"}>Tickets</button></a>
        </div>
    )
}

export default ConcertItem
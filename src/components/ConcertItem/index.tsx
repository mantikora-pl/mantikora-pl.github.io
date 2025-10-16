import './style.css'
import {EventDate} from "../../helper/date";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export interface Concert{
    id:number
    date:EventDate,
    numericDate:{year:number,month:number,day:number},
    name:string
    country:string
    state?:string
    city:string
    buyLink:string
    visible:boolean
    lat:number
    lng:number
    distanceKm:number
    daysToEvent:number
}

/**name is also club! location is only city+country **/
export function generateFlagClassName(code:string):string{
    return "concertDate fi fi-"+code.toLowerCase()
}

function ConcertItem({item}:{item:Concert}){

    return (
        <div className={"concertRow"}>
            <div className={generateFlagClassName(item.country??"us")}>
                <div className={"concertMonth"}>{item.date.month}</div>
                <div className={"concertDay"}>{item.date.day}</div>
                <div className={"concertYear"}>{item.date.year}</div>
            </div>

            <p className={"concertName"}>{item.name}</p>
            <p className={"concertLocation"}>{item.city}</p>
            <a href={item.buyLink}>
                <button className={"ticketsButton"}>Tickets</button>
            </a>
        </div>
    )
}

export default ConcertItem

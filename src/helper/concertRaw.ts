import {daysToEvent,EventDate} from "./date"
import {findCityByNameAndCountry} from "./findCity"

export function shouldBeVisible(item:ConcertRaw):boolean{
    return item.visible&&daysToEvent({
        year:item.numericDate.year,
        month:item.numericDate.month,
        day:item.numericDate.day
    })>=0
}

export interface ConcertRaw{
    id:number
    date:EventDate,
    numericDate:{year:number,month:number,day:number},
    name:string //club/festival/event name
    country:string
    state:string // or province
    city:string
    buyLink:string
    visible:boolean
}

export function getConcertLocation(concert:ConcertRaw){
    const data=findCityByNameAndCountry(concert.city,concert.state,concert.country)
    return {lat:data.lat as number,lng:data.lng as number, found:data.found}
}
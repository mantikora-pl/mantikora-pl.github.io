import {daysToEvent,EventDate} from "./date";
import {findCityByNameAndCountry} from "./findCity";
import transliterate from "@sindresorhus/transliterate";

export function shouldBeVisible(item:ConcertRaw):boolean{
    return item.visible&&daysToEvent({
        year:item.numericDate.year,
        month:item.numericDate.month,
        day:item.numericDate.day
    })>=0;
}

export interface ConcertRaw{
    id:number
    date:EventDate,
    numericDate:{year:number,month:number,day:number},
    name:string //club/festival/event name
    country:string
    state?:string //for us
    city:string
    buyLink:string
    visible:boolean
}

export function getConcertLocation(concert:ConcertRaw){
    const data=findCityByNameAndCountry(transliterate(concert.city),concert.country)
    return {lat:data.lat as number,lng:data.lng as number}
}
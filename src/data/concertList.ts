import {ConcertRaw} from "../helper/concertRaw";
import {translateDate} from "../helper/date";
import {defaultLang} from "../helper/translation";

export const concertsRaw:ConcertRaw[]=[
    {
        id:1,
        date:translateDate(2026,4,2,defaultLang),
        numericDate:{year:2026,month:4,day:2},
        name:"A sample concert that's not hidden",
        country:"PL",
        state:undefined,
        city:"Wadowice",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    }
]

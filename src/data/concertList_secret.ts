import {ConcertRaw} from "../helper/concertRaw"
import {translateDate} from "../helper/date"
import {getLanguage} from "../helper/translation"

export const concertsRaw_secret:ConcertRaw[]=[
    {
        id:1,
        date:translateDate(2026,4,2,getLanguage()),
        numericDate:{year:2026,month:4,day:2},
        name:"Festiwal kremówki",
        country:"PL",
        state:undefined,
        city:"Wadowice",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    },
    {
        id:2,
        date:translateDate(2026,5,3,getLanguage()),
        numericDate:{year:2026,month:5,day:3},
        name:"idk",
        country:"US",
        state:"NY",
        city:"New York",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    },
    {
        id:3,
        date:translateDate(2026,6,4,getLanguage()),
        numericDate:{year:2026,month:6,day:4},
        name:"Mystic",
        country:"PL",
        state:undefined,
        city:"Gdańsk",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    },
    {
        id:4,
        date:translateDate(2026,9,12,getLanguage()),
        numericDate:{year:2026,month:9,day:12},
        name:"Praha",
        country:"CZ",
        state:undefined,
        city:"Prague",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    },
    {
        id:3,
        date:translateDate(2026,12,12,getLanguage()),
        numericDate:{year:2026,month:12,day:12},
        name:"Liverpool festival",
        country:"GB",
        state:undefined,
        city:"Liverpool",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    }
]

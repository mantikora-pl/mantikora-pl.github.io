import {ConcertRaw} from "../helper/concertRaw"
import {translateDate} from "../helper/date"
import {getLanguage} from "../helper/translation"

export const concertsRaw_real:ConcertRaw[]=[]
export const concertsRaw_mock:ConcertRaw[]=[
    {
        id:1,
        date:translateDate(2026,4,2,getLanguage()),
        numericDate:{year:2026,month:4,day:2},
        name:"Festiwal kremówki",
        country:"PL",
        state:"Małopolskie",
        city:"Wadowice",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    },
    {
        id:2,
        date:translateDate(2026,5,3,getLanguage()),
        numericDate:{year:2026,month:5,day:3},
        name:"Example concert",
        country:"US",
        state:"New York",
        city:"New York",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    },
    {
        id:3,
        date:translateDate(2026,6,4,getLanguage()),
        numericDate:{year:2026,month:6,day:4},
        name:"Example event",
        country:"PL",
        state:"Pomorskie",
        city:"Gdańsk",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    },
    {
        id:4,
        date:translateDate(2026,9,12,getLanguage()),
        numericDate:{year:2026,month:9,day:12},
        name:"Przykładowe wydarzenie",
        country:"CZ",
        state:"Praha",
        city:"Prague",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    },
    {
        id:5,
        date:translateDate(2026,12,12,getLanguage()),
        numericDate:{year:2026,month:12,day:12},
        name:"Example festival",
        country:"GB",
        state:"Liverpool",
        city:"Liverpool",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    },
    {
        id:6,
        date:translateDate(2026,11,4,getLanguage()),
        numericDate:{year:2026,month:11,day:4},
        name:"Przykładowy festival",
        country:"BR",
        state:"São Paulo",
        city:"Sao Paulo",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    },
    {
        id:7,
        date:translateDate(2026,8,6,getLanguage()),
        numericDate:{year:2026,month:8,day:6},
        name:"hehe bo wiecie",
        country:"JP",
        state:"Hiroshima",
        city:"Hiroshima",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    },
    {
        id:8,
        date:translateDate(2026,8,9,getLanguage()),
        numericDate:{year:2026,month:8,day:9},
        name:"-||-",
        country:"JP",
        state:"Nagasaki",
        city:"Nagasaki",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    },
    {
        id:21,
        date:translateDate(2026,8,13,getLanguage()),
        numericDate:{year:2026,month:8,day:13},
        name:"does this country exist???",
        country:"",
        state:"",
        city:"Lavender Town",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    },
    {
        id:8,
        date:translateDate(2026,10,1,getLanguage()),
        numericDate:{year:2026,month:10,day:1},
        name:"Nie chce mi się tego pisać",
        country:"KR",
        state:"Seoul",
        city:"Seoul",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    },
    {
        id:9,
        date:translateDate(2026,4,20,getLanguage()),
        numericDate:{year:2026,month:4,day:20},
        name:"These jokes are getting worse",
        country:"NL",
        state:"Amsterdam",
        city:"Amsterdam",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    },
    {
        id:10,
        date:translateDate(2026,8,23,getLanguage()),
        numericDate:{year:2026,month:8,day:23},
        name:"koncert na wsi",
        country:"PL",
        state:"Wielkopolskie",
        city:"Kalisz",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    },
    {
        id:10,
        date:translateDate(2027,8,23,getLanguage()),
        numericDate:{year:2027,month:8,day:23},
        name:"koncert w lakewood",
        country:"US",
        state:"Ohio",
        city:"Lakewood",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    },
    {
        id:100,
        date:translateDate(2027,8,26,getLanguage()),
        numericDate:{year:2027,month:8,day:26},
        name:"koncert w innym lakewood",
        country:"US",
        state:"Colorado",
        city:"Lakewood",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    }

]

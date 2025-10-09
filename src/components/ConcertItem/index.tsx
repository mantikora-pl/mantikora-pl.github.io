import React,{useEffect,useRef,useState} from 'react'
import './style.css'
import {defaultLang} from "../../helper/translation";
import {EventDate} from "../../helper/date";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import {getCoordinates} from "../../helper/CoordinateFetcher";
import Cookies from 'universal-cookie';
import {daysToEvent} from "../../helper/date";
import {codeToCountry} from "../../helper/constants";
import {findCityByNameAndCountry} from "../../helper/findCity";
import transliterate from '@sindresorhus/transliterate';
export interface Concert_Old{
    date:EventDate
    name:string
    location:string
    buyLink:string
    visible:boolean
}

export interface Concert{
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

/**name is also club! location is only city+country **/
export function generateFlagClassName(code:string):string{
    return "concertDate fi fi-"+code.toLowerCase()
}

//todo: either some more dynamic way of switching day/month/year, or leave only one version

const cookies=new Cookies();

function getConcertLocation(concert:Concert){
    const data=findCityByNameAndCountry(transliterate(concert.city),concert.country)
    return {lat:data.lat,lng:data.lng}
}
function ConcertItem({item}:{item:Concert}){
    const [coordinates,setCoordinates]=useState({lat:0,lng:0})
    const gpsLocation=useRef(false)

    console.log(getConcertLocation(item))

    useEffect(()=>{
        if(!Boolean(cookies.get('lat'))){
            getCoordinates(setCoordinates,gpsLocation)
            cookies.set('lat', coordinates.lat, { path: '/' })
            cookies.set('lng', coordinates.lng, { path: '/' })
        }
        else
            setCoordinates({lat:Number(cookies.get('lat')),lng:Number(cookies.get('lng'))})

    },[coordinates.lat, coordinates.lng])


    //console.log("Location",coordinates.lat,coordinates.lng)
    //console.log("Closest: ",findClosestCity(coordinates.lat,coordinates.lng))

    console.log(daysToEvent({year:item.numericDate.year,month:item.numericDate.month,day:item.numericDate.day}))
    return (
        <div className={"concertRow"}>
            {defaultLang==="en"&&
                <div className={generateFlagClassName(item.country??"us")}>
                    <div className={"concertMonth"}>{item.date.month}</div>
                    <div className={"concertDay"}>{item.date.day}</div>
                    <div className={"concertYear"}>{item.date.year}</div>
                </div>
            }
            {defaultLang!=="en"&&
                <div className={generateFlagClassName(item.country??"us")}>
                    <div className={"concertDay"}>{item.date.day}</div>
                    <div className={"concertMonth"}>{item.date.month}</div>
                    <div className={"concertYear"}>{item.date.year}</div>
                </div>
            }
            <p className={"concertName"}>{item.name}</p>
            <p className={"concertLocation"}>{item.city}</p>
            <a href={item.buyLink}>
                <button className={"ticketsButton"}>Tickets</button>
            </a>
        </div>
    )
}






export default ConcertItem

//items.country??items.state+" "+items.city
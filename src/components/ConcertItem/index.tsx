import './style.css'
import {dayOfTheWeek,EventDate,localDayOfTheWeek} from "../../helper/date"
import "/node_modules/flag-icons/css/flag-icons.min.css"
import ScrollReveal from 'scrollreveal'
import {getLanguage,getTranslation} from "../../helper/translation"
import {getColor} from "../../helper/getColor"
import Tooltip from '@mui/material/Tooltip'
import {FoundEnum} from "../../helper/findCity"
import {stateNameToCode} from "../../helper/constants";

export interface Concert{
    id:number
    date:EventDate,
    numericDate:{year:number,month:number,day:number},
    name:string
    country:string
    state:string
    city:string
    buyLink:string
    visible:boolean
    lat:number
    lng:number
    distanceKm:number
    distanceMi:number
    daysToEvent:number
    found:FoundEnum
}

/**name is also club! location is only city+country **/
export function generateFlagClassName(code:string):string{
    return "concertDate fi fi-"+code.toLowerCase()
}

ScrollReveal().reveal('.concertRow')

function LocationDisclaimer(){
    return <Tooltip title={getTranslation(getLanguage(),"approxLocation")} placement={"top"}>
        <p>*</p>
    </Tooltip>
}

function ConcertItem({item,showDistance=false}:{item:Concert,showDistance?:boolean}){
    const distance=(getLanguage()==="en"&&navigator.language==="en-US")?item.distanceMi+" mi":item.distanceKm+" km"
    const color=getColor(item.distanceKm)
    if(item.found===FoundEnum.NOT_FOUND) showDistance=false
    const location=(item.country==="US") ? `${item.city} (${stateNameToCode(item.state)})` : item.city

    const dayOfTheWeekNumber=dayOfTheWeek(item.numericDate.year,item.numericDate.month,item.numericDate.day)
    return (
        <>
            {item.found!==FoundEnum.NOT_FOUND?<>
                <tr className={"concertRow"}>
                    {showDistance?
                        <>
                            <td className={"distanceDaysCell"} style={{color}}>{distance}</td>
                            {item.found!==FoundEnum.FOUND_CITY?<LocationDisclaimer/>:null}
                        </>:

                        <td className={"distanceDaysCell"}>{item.daysToEvent+getTranslation(getLanguage(),"daysLeft")}</td>
                    }

                    <td>
                        <Tooltip title={localDayOfTheWeek(getLanguage(),dayOfTheWeekNumber)} placement={"top"}
                                 className={"dayTooltip"}>
                            <div className={generateFlagClassName(item.country??"us")}>
                                <div className={"concertDay"}>{item.date.day}</div>
                                <div className={"concertMonth"}>{item.date.month}</div>
                                <div className={"concertYear"}>{item.date.year}</div>
                            </div>
                        </Tooltip>
                    </td>

                    <td className={"concertName"}>{item.name}</td>
                    <td className={"concertLocation"}>{location}</td>
                    <td>
                        <a href={item.buyLink}>
                            <button className={"ticketsButton"}>{getTranslation(getLanguage(),"tickets")}</button>
                        </a>
                    </td>
                </tr>
            </>:null
            }
        </>


    )
}

export default ConcertItem

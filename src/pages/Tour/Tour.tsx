import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ConcertItem,{Concert} from "../../components/ConcertItem";
import ConcertItemM from "../../components/ConcertItemM";
import MyFooter from "../../components/MyFooter";
import React,{useEffect,useRef,useState} from "react";
import {BrowserView,MobileView} from "react-device-detect";
import PageInMaking from "../../components/PageInMaking";
import {daysToEvent} from "../../helper/date";
import {getDistance} from "../../helper/findCity";
import {getCoordinates} from "../../helper/CoordinateFetcher";
import Cookies from "universal-cookie";
import {getConcertLocation,shouldBeVisible} from "../../helper/concertRaw";
import {concertsRaw_secret as concertsRaw} from "../../data/concertList_secret"
//import {concertsRaw as concertsRaw} from "../../data/concertList"


const cookies=new Cookies();
export default function Tour(){
    const [coordinates,setCoordinates]=useState({lat:0,lng:0})
    const gpsLocation=useRef(false)

    /** has to have visible=true and date in the future/present **/
    function visibleCount():boolean{
        let count=0
        concertsRaw.forEach((item)=>{
            if(shouldBeVisible(item)) count++
        })
        return count>0
    }

    useEffect(()=>{
        if(!Boolean(cookies.get('lat'))){
            getCoordinates(setCoordinates,gpsLocation)
            cookies.set('lat', coordinates.lat, { path: '/' })
            cookies.set('lng', coordinates.lng, { path: '/' })
        }
        else
            setCoordinates({lat:Number(cookies.get('lat')),lng:Number(cookies.get('lng'))})

    },[coordinates.lat, coordinates.lng])

    const concerts:Concert[]=concertsRaw.map(item=>({
        id:item.id,
        date:item.date,
        numericDate:item.numericDate,
        name:item.name,
        country:item.country,
        state:item.state,
        city:item.city,
        buyLink:item.buyLink,
        visible:item.visible,
        lat:getConcertLocation(item).lat,
        lng:getConcertLocation(item).lng,
        distanceKm:getDistance(cookies.get('lat'),cookies.get('lng'),getConcertLocation(item).lat,getConcertLocation(item).lng),
        daysToEvent:daysToEvent(item.numericDate),
    }))
    concerts.sort((a,b)=>a.daysToEvent-b.daysToEvent) //sort by days to event
    //concerts.sort((a,b)=>a.distanceKm-b.distanceKm) distance

    return <div>
        <div className={"page"}>
            <div className={"stickyTop"}>
                <Header/>
                <Navbar/>
            </div>
            <PageInMaking/>
            <p className={"pageTitle"}>Tour</p>
            <div className={"concertItemsWrapper"}>
                {visibleCount()&&
                    <div className={"concertItems"}>
                        <BrowserView>
                            {concerts.map((item,i)=>(
                                <>
                                    {shouldBeVisible(item)&&
                                        <ConcertItem item={concerts[i]} key={i}/>
                                    }
                                </>
                            ))}
                        </BrowserView>
                        <MobileView>
                            {concerts.map((item,i)=>(
                                <>
                                    {shouldBeVisible(item)&&
                                        <ConcertItemM items={concerts[i]} key={i}/>
                                    }
                                </>
                            ))}
                        </MobileView>
                    </div>}
                {!visibleCount()&&
                    <p id={"messageNoConcertDates"}>no tour dates for now : (</p>
                }
            </div>
        </div>
        <MyFooter/>
    </div>
}

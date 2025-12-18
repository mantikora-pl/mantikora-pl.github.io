import ConcertItem,{Concert} from "../../components/ConcertItem";
import ConcertItemM from "../../components/ConcertItemM";
import React,{useEffect,useRef,useState} from "react";
import {BrowserView,MobileView} from "react-device-detect";
import {daysToEvent} from "../../helper/date";
import {getDistance} from "../../helper/findCity";
import {getCoordinates} from "../../helper/CoordinateFetcher";
import Cookies from "universal-cookie";
import {getConcertLocation,shouldBeVisible} from "../../helper/concertRaw";
//import {concertsRaw_secret as concertsRaw} from "../../data/concertList_secret"
import {concertsRaw} from "../../data/concertList"
import {getLanguage,getTranslation} from "../../helper/translation";
import {isMobile} from 'react-device-detect';

const cookies=new Cookies();
export default function Tour(){
    const [coordinates,setCoordinates]=useState({lat:0,lng:0})
    const gpsLocation=useRef(false)
    const [sortByLocation,setSortByLocation]=useState(false)

    function handleSortTypeChange(state:boolean){
        const concertElements=document.querySelectorAll('.concertRow');
        const buttonElement=document.querySelector('#buttonSortBy p');
        concertElements.forEach((element,index)=>{
            setTimeout(()=>element.classList.add('fadeInAnimation'),index*70);
        });
        buttonElement?.classList.add('fadeInAnimation');
        setSortByLocation(state);
        setTimeout(()=>{
            concertElements.forEach((element)=>element.classList.remove('fadeInAnimation'));
            buttonElement?.classList.remove('fadeInAnimation');
        },500+concertElements.length*70);
    }

    function visibleCount():boolean{
        let count=0
        concertsRaw.forEach((item)=>{
            if(shouldBeVisible(item)) count++
        })
        return count>0
    }

    function doesConcertMatchFilter(concert:Concert):boolean{
        return (concert.name.toLowerCase().includes(filter.toLowerCase())||concert.city.toLowerCase().includes(filter.toLowerCase()))&&shouldBeVisible(concert)
    }

    useEffect(()=>{
        if(!Boolean(cookies.get('lat'))){
            getCoordinates(setCoordinates,gpsLocation)
            cookies.set('lat',coordinates.lat,{path:'/',maxAge:60*60*3})
            cookies.set('lng',coordinates.lng,{path:'/',maxAge:60*60*3})
        }
        else
            setCoordinates({lat:Number(cookies.get('lat')),lng:Number(cookies.get('lng'))})

    },[coordinates.lat,coordinates.lng])

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
        distanceMi:Math.floor(getDistance(cookies.get('lat'),cookies.get('lng'),getConcertLocation(item).lat,getConcertLocation(item).lng)/1.609344),
        daysToEvent:daysToEvent(item.numericDate),
    }))
    if(sortByLocation) concerts.sort((a,b)=>a.distanceKm-b.distanceKm)
    else concerts.sort((a,b)=>a.daysToEvent-b.daysToEvent)
    const [filter,setFilter]=useState("");

    function handleFilterConcerts(filterText:string){
        setFilter(filterText)
    }

    return <div className={"innerPage gradientBackground"}>
        <div className={"concertPageHeader"}>
            <div className={"flex1"}/>
            <p className={"pageTitle"}>Tour</p>
            <div id={"concertsControlsContainer"}>
                {/*<input
                    type="text"
                    id="concertSearch"
                    onChange={e => handleFilterConcerts(e.target.value)}
                    placeholder="translate this"
                />*/}
                <button
                    id={isMobile?"buttonOrderByM":"buttonOrderBy"}
                    onClick={()=>handleSortTypeChange(!sortByLocation)}>
                    {sortByLocation?getTranslation(getLanguage(),"sortByDate"):getTranslation(getLanguage(),"sortByLocation")}
                </button>
            </div>
        </div>
        <div className={"width100 centeredFlexColumnContainer"}>
            {visibleCount()&&
                <div>
                    <BrowserView>
                        <table>
                            {concerts
                                .filter(item=>doesConcertMatchFilter(item))
                                .map((item,i)=>(
                                    <>
                                        <ConcertItem item={concerts[i]} key={i} showDistance={sortByLocation}/>
                                    </>
                                ))}
                        </table>
                    </BrowserView>
                    <MobileView>
                        {concerts.map((item,i)=>(
                            <>
                                {shouldBeVisible(item)&&
                                    <ConcertItemM item={concerts[i]} key={i}/>
                                }
                            </>
                        ))}
                    </MobileView>
                </div>}
            {!visibleCount()&&
                <p id={"noConcertDatesText"}>no tour dates for now : (</p>
            }
        </div>
    </div>
}

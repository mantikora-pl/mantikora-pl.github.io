import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ConcertItem,{Concert} from "../../components/ConcertItem";
import ConcertItemM from "../../components/ConcertItemM";
import MyFooter from "../../components/MyFooter";
import React from "react";
import {defaultLang,getTranslation} from "../../helper/translation";
import {BrowserView,MobileView} from "react-device-detect";
import PageInMaking from "../../components/PageInMaking";
import {daysToEvent,translateDate} from "../../helper/date";
import {findCityByName} from "../../helper/findCity";
import {codeToCountry} from "../../helper/constants";



const items:Concert[]=[
    {
        id:1,
        date:translateDate(2005,4,2,defaultLang),
        numericDate:{year:2005,month:4,day:2},
        name:"Festiwal kremówki",
        country:"PL",
        state:undefined,
        city:"Wadowice",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    },
    {
        id:2,
        date:translateDate(2001,9,11,defaultLang),
        numericDate:{year:2001,month:9,day:11},
        name:"Concert on the roof of World Trade Center",
        country:"US",
        state:"NY",
        city:"New York City",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    },
    {
        id:3,
        date:translateDate(2026,6,4,defaultLang),
        numericDate:{year:2026,month:6,day:4},
        name:"Mystic",
        country:"PL",
        state:undefined,
        city:"Gdańsk",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    }
]


export default function Tour(){
    const date={
        "year":new Date().getFullYear(),
        "month":new Date().getMonth()+1,
        "day":new Date().getDate()
    }
    console.log(date)

    /**
     * has to have visible=true and date in the future/present
     * **/
    function shouldBeVisible(item:Concert):boolean{
        return item.visible&&daysToEvent({
            year:item.numericDate.year,
            month:item.numericDate.month,
            day:item.numericDate.day
        })>=0;
    }
    function visibleCount():boolean{
        let count=0
        items.forEach((item)=>{
            if(shouldBeVisible(item)) count++
        })
        return count>0
    }

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
                        {/*<BrowserView>*/}
                        {items.map((item,i)=>(
                            <>
                                {shouldBeVisible(item)&&
                                    <ConcertItem item={items[i]} key={i}/>
                                }
                            </>
                        ))}
                        {/* </BrowserView>
                        <MobileView>
                            {items.map((item,i)=>(
                                <>
                                    {item.visible&&
                                        <ConcertItemM items={items[i]} key={i}/>
                                    }
                                </>
                            ))}
                        </MobileView>*/}
                    </div>}
                {!visibleCount()&&
                    <p id={"messageNoConcertDates"}>no tour dates for now : (</p>
                }
            </div>
        </div>
        <MyFooter/>
    </div>
}

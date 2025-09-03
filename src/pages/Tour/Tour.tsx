import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ConcertItem,{Concert} from "../../components/ConcertItem";
import ConcertItemM from "../../components/ConcertItemM";
import MyFooter from "../../components/MyFooter";
import React from "react";
import {defaultLang} from "../../helper/translation";
import {BrowserView,MobileView} from "react-device-detect";

const items:Concert[]=[
    {
        year:"2025",
        month:"lipiec",
        day:"05",
        name:"zajebisty festival",
        location:"Paris, Texas",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    },
    {
        year:"2025",
        month:"lipiec",
        day:"08",
        name:"zajebisty klub",
        location:"Warsaw, Virginia",
        buyLink:"https://www.ticketmaster.com/mantikora",
        visible:true
    }
]

export default function Tour(){
    function visibleCount():boolean{
        let count=0
        items.forEach((item)=>{if(item.visible)count++})
        return count>0
    }

    return <div>
        <div className={"page"}>
            <div className={"stickyTop"}>
                <Header/>
                <Navbar/>
            </div>
            <p className={"pageTitle"}>Tour</p>
            <div className={"concertItemsWrapper"}>
                {visibleCount() &&
                    <div className={"concertItems"}>
                        <BrowserView>
                            {items.map((item,i)=>(
                                <>
                                    {item.visible&&
                                        <ConcertItem items={items[i]} key={i}/>
                                    }
                                </>
                            ))}
                        </BrowserView>
                        <MobileView>
                            {items.map((item,i)=>(
                                <>
                                    {item.visible&&
                                        <ConcertItemM items={items[i]} key={i}/>
                                    }
                                </>
                            ))}
                        </MobileView>
                    </div>}
                {!visibleCount() &&
                    <p id={"messageNoConcertDates"}>no tour dates for now : (</p>
                }
            </div>
        </div>
        <MyFooter/>
    </div>
}
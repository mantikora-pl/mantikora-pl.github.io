import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import 'react-vertical-timeline-component/style.min.css';
import Timeline,{TimelineElement} from "../../components/Timeline";
import MyFooter from "../../components/MyFooter";
import React from "react";
import {getLanguage,getTranslation} from "../../helper/translation";
import PageInMaking from "../../components/PageInMaking";

const timeLineItems:TimelineElement[]=[
    {
        id:5,
        date:"2025 ???",
        subtitle:getTranslation(getLanguage(),"timelineSubTitle-5"),
        description:getTranslation(getLanguage(),"timelineDesc-5"),
        photo:""
    },
 /*   {
        id:4,
        date:"2025 August",
        subtitle:getTranslation(getLanguage(),"timelineSubTitle-4"),
        description:getTranslation(getLanguage(),"timelineDesc-4"),
        photo:""
    },*/
    {
        id:3,
        date:"10.06.2025",
        subtitle:getTranslation(getLanguage(),"timelineSubTitle-3"),
        description:getTranslation(getLanguage(),"timelineDesc-3"),
        photo:""
    },
    {
        id:2,
        date:"2025 June",
        subtitle:getTranslation(getLanguage(),"timelineSubTitle-2"),
        description:getTranslation(getLanguage(),"timelineDesc-2"),
        photo:"mantikoraLogo1.png"
    },
    {
        id:1,
        date:"2025 Mid April",
        subtitle:getTranslation(getLanguage(),"timelineSubTitle-1"),
        description:getTranslation(getLanguage(),"timelineDesc-1"),
        photo:""
    }
]


export default function BandTimeline(){
    return <div>
        <div className={"page"}>
            <div className={"stickyTop"}>
                <Header/>
                <Navbar/>
            </div>
            <PageInMaking/>
            <Timeline items={timeLineItems}/>
        </div>
        <MyFooter/>
    </div>
}
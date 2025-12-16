import 'react-vertical-timeline-component/style.min.css';
import Timeline,{TimelineElement} from "../../components/Timeline";
import React from "react";
import {getLanguage,getTranslation} from "../../helper/translation";

const timeLineItems:TimelineElement[]=[
    {
        id:5,
        year:2026,
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
        year:2025,
        month:6,
        day:10,
        subtitle:getTranslation(getLanguage(),"timelineSubTitle-3"),
        description:getTranslation(getLanguage(),"timelineDesc-3"),
        photo:""
    },
    {
        id:2,
        year:2025,
        month:6,
        subtitle:getTranslation(getLanguage(),"timelineSubTitle-2"),
        description:getTranslation(getLanguage(),"timelineDesc-2"),
        photo:"mantikoraLogo1.png"
    },
    {
        id:1,
        year:2025,
        month:4,
        day:17, //todo: check
        subtitle:getTranslation(getLanguage(),"timelineSubTitle-1"),
        description:getTranslation(getLanguage(),"timelineDesc-1"),
        photo:""
    }
]


export default function BandTimeline(){
    return <div>
        <Timeline items={timeLineItems}/>
    </div>
}
import 'react-vertical-timeline-component/style.min.css'
import Timeline from "../../components/Timeline"
import React from "react"
import {timeLineItems} from "../../data/timelineData"
import { HashLink } from 'react-router-hash-link';
import ScrollToTop from "react-scroll-to-top";

export default function BandTimeline(){
    const years=Array.from(new Set(timeLineItems.map(item=>item.year)))
    return <div className={"innerPage gradientBackground"}>
        <div id={"yearsHeader"}>
            {years.map((item,i)=>(
                <div className={"yearLinkWrapper"}>
                    <HashLink to={`/history/#year${item}`} className={"yearLink"}>{item}</HashLink>
                </div>
            ))}
        </div>
        <Timeline items={timeLineItems}/>
        <ScrollToTop/>
    </div>
}

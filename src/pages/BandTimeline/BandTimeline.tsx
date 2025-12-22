import 'react-vertical-timeline-component/style.min.css'
import Timeline from "../../components/Timeline"
import React from "react"
import {timeLineItems_real, timeLineItems_mock} from "../../data/timelineData"
import { HashLink } from 'react-router-hash-link';
import ScrollToTop from "react-scroll-to-top";
import {mock} from "../../data/mock"

export default function BandTimeline(){
    const timelineItems=(mock)?timeLineItems_mock:timeLineItems_real
    const years=Array.from(new Set(timelineItems.map(item=>item.year)))
    return <div className={"innerPage skullBackground"}>
        <div id={"yearsHeader"}>
            {years.map((item,i)=>(
                <div className={"yearLinkWrapper"}>
                    <HashLink to={`/timeline/#year${item}`} className={"yearLink"} smooth={true}>{item}</HashLink>
                </div>
            ))}
        </div>
        <Timeline items={timelineItems}/>
        <ScrollToTop smooth/>
    </div>
}

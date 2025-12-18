import 'react-vertical-timeline-component/style.min.css'
import Timeline from "../../components/Timeline"
import React from "react"
import {timeLineItems} from "../../data/timelineData"


export default function BandTimeline(){
    return <div className={"innerPage gradientBackground"}>
        <Timeline items={timeLineItems}/>
    </div>
}
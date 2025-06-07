import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import './style.css'

export interface TimelineElement{
    title:string,
    subtitle:string,
    description:string,
    date:string
}

export default function Timeline({items}:{items: TimelineElement[]}){
    return <VerticalTimeline>
        {items.map((item,i)=>(
            <VerticalTimelineElement key={i} className="vertical-timeline-element" contentStyle={{background:'#383737'}} date={item.date}>
                <h2 className={"timeline-item-title"} style={{color:"white"}}>{item.title}</h2>
                <h3 className="timeline-item-subtitle">{item.subtitle}</h3>
                <p className={"timelineItemDetails"}>{item.description}</p>
            </VerticalTimelineElement>
        ))}
    </VerticalTimeline>
}


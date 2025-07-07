import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import './style.css'

export interface TimelineElement{
    title?:string,
    subtitle?:string,
    description:string,
    date:string,
    photo:string
    photoAlt?:string //TODO: SHOULD BE MANDATORY! NO "?"
}

export default function Timeline({items}:{items: TimelineElement[]}){
    return <VerticalTimeline>
        {items.map((item,i)=>(
            <VerticalTimelineElement key={i} className="vertical-timeline-element" contentStyle={{background:'#383737'}}>
                    <h2 className={"timeline-item-title"} style={{color:"white", fontSize:28}}>{item.date}</h2>
                    {/*<h3 className="timeline-item-subtitle">{item.subtitle}</h3>*/}
                <div style={{display:"flex"}}>
                    <p className={"timelineItemDetails"}>{item.description}</p>
                    {item.photo?.length>0&&
                   <img src={item.photo} alt={item.photoAlt} className={"timelineImg"}/>}
                </div>
            </VerticalTimelineElement>
        ))}
    </VerticalTimeline>
}


import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import './style.css'
import {getMonthTranslation,localizeDate} from "../../helper/date";
import {getLanguage} from "../../helper/translation";

export interface TimelineElement{
    id:number,
    title?:string,
    subtitle?:string,
    description:string,
    year:number,
    month?:number,
    day?:number,
    photo:string,
    photoAlt?:string
}

function getLocalisedTimelineDate(year:number,month?:number,day?:number){
    if (!month) return year
    if (!day) return getMonthTranslation(getLanguage(),month)+" "+year
    return localizeDate(year,month,day)
}

export default function Timeline({items}:{items: TimelineElement[]}){
    return <VerticalTimeline>
        {items.map((item,i)=>(
            <VerticalTimelineElement key={i} className="vertical-timeline-element"
                contentStyle={{background: 'linear-gradient(to bottom, var(--itemBackgroundColor), var(--backgroundColorMain))'
            ,border:'1px solid var(--borderColorDarkPurple)'}}>
                    <h2 className={"timeline-item-title"} style={{color:"white", fontSize:28}}>
                        {getLocalisedTimelineDate(item.year,item.month,item.day)}
                    </h2>
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


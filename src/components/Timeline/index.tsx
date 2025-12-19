import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'
import './style.css'
import {getMonthTranslation,localizeDate} from "../../helper/date"
import {getLanguage} from "../../helper/translation"

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
    if(!month) return year
    if(getLanguage()==="pl"&& !day) return getMonthTranslation(getLanguage()+"-noDay",month)+" "+year
    else if(!day) return getMonthTranslation(getLanguage(),month)+" "+year
    return localizeDate(year,month,day)
}

export default function Timeline({items}:{items:TimelineElement[]}){
    const verticalTimeLineStyle={background:"linear-gradient(to bottom, var(--itemBackgroundColor), var(--backgroundColorMain))"}

    return <VerticalTimeline>
        {items.map((item,i)=>(
            <VerticalTimelineElement key={i} className="vertical-timeline-element"
                                     contentStyle={verticalTimeLineStyle}
                                     id={i===items.length-1||(i<items.length-1&&items[i+1].year<item.year)?`year${item.year}`:undefined}>

                <h2 style={{color:"white",fontSize:28}}>
                    {getLocalisedTimelineDate(item.year,item.month,item.day)}
                </h2>
                {/*<h3 className="timeline-item-subtitle">{item.subtitle}</h3>*/}
                <div style={{display:"flex"}}>
                    <p className={"timelineItemDetails"}>{item.description}</p>
                    {item.photo?.length>0?
                        <img src={item.photo} alt={item.photoAlt} className={"timelineImage"}/>:null}
                </div>
            </VerticalTimelineElement>
        ))}
    </VerticalTimeline>
}


import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import 'react-vertical-timeline-component/style.min.css';
import Timeline,{TimelineElement} from "../../components/Timeline";
import MyFooter from "../../components/MyFooter";
import React from "react";

const timeLineItems:TimelineElement[]=[
    {
        date:"2025 ???",
        description:"Zostaje nagrany singiel devil's mouth",
        photo:""
    },
    {
        date:"2025 August",
        subtitle:"subtitle3",
        description:"Zespół w pełnym składzie",
        photo:""
    },
    {
        date:"10.06.2025",
        subtitle:"subtitle1",
        description:"Pierwsza próba",
        photo:""
    },
    {
        date:"2025 June",
        subtitle:"subtitle2",
        description:"Powstało logo",
        photo:"mantikoraLogo1.png"
    },
    {
        date:"2025 Mid April",
        subtitle:"",
        description:"Zaczyna powstawać pierwszy wspólny utwór - Devil's Mouth ",
        photo:""
    }
]


export default function History(){
    return <div>
        <div className={"page"}>
            <div className={"stickyTop"}>
                <Header/>
                <Navbar/>
            </div>
            {/*<VerticalTimeline>
            <VerticalTimelineElement className="vertical-timeline-element" contentStyle={{background:'#383737'}} date="20.04.2025">
                <h3 className="timeline-item-title">Title</h3>
                <h4 className="timeline-item-subtitle">Subitle</h4>
                <p>description</p>
            </VerticalTimelineElement>
        </VerticalTimeline>*/}

            <Timeline items={timeLineItems}/>
        </div>
        <MyFooter/>
    </div>
}
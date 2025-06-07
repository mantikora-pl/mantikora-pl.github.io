import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import 'react-vertical-timeline-component/style.min.css';
import Timeline,{TimelineElement} from "../../components/Timeline";

const timeLineItems:TimelineElement[]=[
    {
        title:"title",
        subtitle:"subtitle",
        description:"description",
        date:"date"
    },
    {
        title:"title1",
        subtitle:"subtitle1",
        description:"description1",
        date:"date1"
    },
    {
        title:"title2",
        subtitle:"subtitle2",
        description:"description2",
        date:"date2"
    },
    {
        title:"title3",
        subtitle:"subtitle3",
        description:"description3",
        date:"date3"
    },
    {
        title:"title4",
        subtitle:"subtitle4",
        description:"description4",
        date:"date4"
    }
]


export default function History(){
    return <div>
        <Header/>
        <Navbar/>
        {/*<VerticalTimeline>
            <VerticalTimelineElement className="vertical-timeline-element" contentStyle={{background:'#383737'}} date="20.04.2025">
                <h3 className="timeline-item-title">Title</h3>
                <h4 className="timeline-item-subtitle">Subitle</h4>
                <p>description</p>
            </VerticalTimelineElement>
        </VerticalTimeline>*/}

        <Timeline items={timeLineItems}/>

    </div>
}
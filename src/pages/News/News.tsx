import BigNewsItem,{NewsI} from "../../components/BigNewsItem";
import SmallNewsItem from "../../components/SmallNewsItem";
import React from "react";

const news: NewsI[] = [
    {
        photoSrc: "https://picsum.photos/500?random=10",
        date: "December 1, 2025",
        title: "City Council Approves New Park Plans",
        content: "The city council approved plans for a new park in downtown, aiming to increase green spaces for residents and visitors alike.",
    },
    {
        photoSrc: "https://picsum.photos/500?random=11",
        date: "December 3, 2025",
        title: "Local School Launches STEM Program",
        content: "A local high school has launched a new STEM program to encourage students to explore careers in science and technology.",
    },
    {
        photoSrc: "https://picsum.photos/500?random=12",
        date: "December 5, 2025",
        title: "New Traffic Regulations in City Center",
        content: "New traffic regulations will be implemented in the city center to alleviate congestion and improve pedestrian safety.",
    },
    {
        photoSrc: "https://picsum.photos/500?random=13",
        date: "December 7, 2025",
        title: "Community Garden Initiative Grows",
        content: "The community garden initiative is expanding, inviting more residents to participate in sustainable gardening practices and workshops.",
    },
    {
        photoSrc: "https://picsum.photos/500?random=1",
        date: "December 9, 2025",
        title: "Local Firm Wins Environmental Award",
        content: "A local firm has been recognized for its commitment to sustainability, winning a prestigious environmental award for its innovative practices.",
    },
    {
        photoSrc: "https://picsum.photos/500?random=2",
        date: "December 10, 2025",
        title: "New Library Opens Downtown",
        content: "A new public library has opened in downtown, offering community members greater access to books, resources, and educational programs.",
    },
    {
        photoSrc: "https://picsum.photos/500?random=3",
        date: "December 12, 2025",
        title: "Healthcare Initiative Launches in Community",
        content: "A new healthcare initiative is launching to provide free health screenings and wellness programs for underserved community members.",
    },
    {
        photoSrc: "https://picsum.photos/500?random=4",
        date: "December 14, 2025",
        title: "Local Business Expands to New Location",
        content: "A beloved local business is expanding to a new location, promising to bring even more of its popular products to the community.",
    },
    /*{
        photoSrc: "https://picsum.photos/500?random=18",
        date: "December 16, 2025",
        title: "City Hosts Annual Winter Festival",
        content: "The city is hosting its annual winter festival, featuring activities for all ages and promoting community spirit during the holiday season.",
    },
    {
        photoSrc: "https://picsum.photos/500?random=19",
        date: "December 18, 2025",
        title: "Local Artists Showcase Their Work",
        content: "An exhibition featuring local artists opens next week, highlighting creative talents and providing a platform for artistic expression in the community.",
    },
    {
        photoSrc: "https://picsum.photos/500?random=20",
        date: "December 20, 2025",
        title: "New Eco-Friendly Bus Service Introduced",
        content: "The city has introduced a new eco-friendly bus service to reduce carbon emissions and provide efficient transportation options for residents.",
    },
    {
        photoSrc: "https://picsum.photos/500?random=21",
        date: "December 22, 2025",
        title: "Local Athlete Qualifies for National Team",
        content: "A local athlete has qualified for the national team, showcasing exceptional talent and inspiring young sports enthusiasts in the community.",
    },
    {
        photoSrc: "https://picsum.photos/500?random=22",
        date: "December 24, 2025",
        title: "Food Bank Drives Collect Record Donations",
        content: "Local food bank drives have collected a record number of donations this holiday season, ensuring families in need receive support.",
    },*/
]

export default function News(){


    return <div className={"innerPage skullBackground"}>
        {/*<div>
            {news.map((item,i)=>(
                <div>
                    {i<4&&
                        <BigNewsItem item={item}/>}
                    {i>=4&&
                        <SmallNewsItem item={item}/>}
                </div>
            ))}
        </div>*/}
        <div id={"newsPage"}>
            <div id={"bigNewsList"}>
                {Array.from({length:4},(_,i)=>
                    <BigNewsItem item={news[i]} key={i}/>
                )}
            </div>
            <div id={"smallNewsWrapper"}>
                {Array.from({length:news.length-4},(_,i)=>
                        /*rows of 4*/
                    <SmallNewsItem item={news[i+4]} key={i+4}/>
                )}
            </div>
        </div>

    </div>
}
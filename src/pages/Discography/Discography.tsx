import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import DiscList,{Disc} from "../../components/DiscList";

const discs:Disc[]=[
    {
        title:"Devil's Mouth (Single)",
        date:"??.06.2025",
        coverArtSrc:"https://picsum.photos/500?random=1",
        songs:[
            "Devil's Mouth"
        ],
        credits:""
    },
    {
        title:"Davy Jones's Locker (Single)",
        date:"??.07.2025",
        coverArtSrc:"https://picsum.photos/500?random=2",
        songs:[
            "Davy Jones's Locker"
        ],
        credits:""
    },
    {
        title:"Album 1",
        date:"??.??.2025",
        coverArtSrc:"https://picsum.photos/500?random=3",
        songs:[
            "Devil's Mouth",
            "Davy Jones's Locker",
            "Umieranie w szpitalu",
            "Żołnierze",
            "TBA",
            "TBA",
            "TBA",
            "TBA",
            "TBA"
        ],
        credits:"Written by the whole band"
    },
]

export default function Discography(){
    return <div>
        <Header/>
        <Navbar/>
        <p className={"pageTitle"}>Our cds</p>
        <DiscList items={discs}/>
    </div>
}
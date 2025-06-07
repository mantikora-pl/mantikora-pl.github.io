import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ConcertItem from "../../components/ConcertItem";
import concertItem from "../../components/ConcertItem";

const items=[
    {
        year:"2025",
        month:"lipiec",
        day:"05",
        name:"zajebisty festival",
        location:"Paris, Texas",
        buyLink:"https://www.ticketmaster.com/mantikora"
    },
    {
        year:"2025",
        month:"lipiec",
        day:"08",
        name:"zajebisty klub",
        location:"Warsaw, Virginia",
        buyLink:"https://www.ticketmaster.com/mantikora"
    }
]

export default function Tour(){
    return <div>
        <Header/>
        <Navbar/>
        <h1 className={"pageTitle"}>Tour</h1>
        <div className={"concertItemsWrapper"}>
            <div className={"concertItems"}>
                {items.map((item,i)=>(
                    <ConcertItem items={items[i]} key={i}/>
                ))}
            </div>
        </div>
    </div>
}
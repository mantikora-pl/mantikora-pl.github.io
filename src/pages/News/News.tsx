import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import BigNewsItem, {NewsI} from "../../components/BigNewsItem";
import SmallNewsItem from "../../components/SmallNewsItem";

const news:NewsI[]=[
    {
        photoSrc:"https://picsum.photos/500?random=4",
        date:"2025.07.01",
        title:"Koncert gdzieśtam",
        content:"dfhrt fuyfhd z ntuytkuikuytyd xcc cnhyjturtaes bkiulkyg",
    },
    {
        photoSrc:"https://picsum.photos/500?random=5",
        date:"2025.07.02",
        title:"Koncert gdzieś indziej",
        content:"dsfsdfsdfdsfdsfdsfdscsf gdf gdfsrwet ger xcxc dsferhrttsdf ted",
    },
    {
        photoSrc:"https://picsum.photos/500?random=6",
        date:"2025.07.04",
        title:"Koncert gdzieśtam",
        content:"dfhrt fuyfhd z ntuytkuikuytyd xcc cnhyjturtaes bkiulkyg",
    },
    {
        photoSrc:"https://picsum.photos/500?random=7",
        date:"2025.07.06",
        title:"Koncert gdzieś indziej",
        content:"dsfsdfsdfdsfdsfdsfdscsf gdf gdfsrwet ger xcxc dsferhrttsdf ted",
    },
    {
        photoSrc:"https://picsum.photos/500?random=8",
        date:"2025.07.08",
        title:"Koncert gdzieśtam",
        content:"dfhrt fuyfhd z ntuytkuikuytyd xcc cnhyjturtaes bkiulkyg",
    },
    {
        photoSrc:"https://picsum.photos/500?random=9",
        date:"2025.07.10",
        title:"Koncert gdzieś indziej",
        content:"dsfsdfsdfdsfdsfdsfdscsf gdf gdfsrwet ger xcxc dsferhrttsdf ted",
    },
]

export default function News(){
    return <div>
        <Header/>
        <Navbar/>
        <p>news here</p>
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
        <div>
            <div>
                {Array.from({length:3},(_,i)=>
                        <span key={i}>
                    <BigNewsItem item={news[i]}/>
                </span>
                )}
            </div>
            <div id={"smallNewsWrapper"}>
                {Array.from({length:news.length-3},(_,i)=>
                    <span key={i}>
                        <SmallNewsItem item={news[i+3]}/>
                    </span>
                )}
            </div>
        </div>

    </div>
}
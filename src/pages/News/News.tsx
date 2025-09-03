import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import BigNewsItem, {NewsI} from "../../components/BigNewsItem";
import SmallNewsItem from "../../components/SmallNewsItem";
import React from "react";
import MyFooter from "../../components/MyFooter";

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
    {
        photoSrc:"https://picsum.photos/500?random=81",
        date:"2025.07.15",
        title:"Koncert gdzieśtam",
        content:"dfhrt fuyfhd z ntuytkuikuytyd xcc cnhyjturtaes bkiulkyg",
    },
    {
        photoSrc:"https://picsum.photos/500?random=91",
        date:"2025.07.19",
        title:"Koncert gdzieś indziej",
        content:"dsfsdfsdfdsfdsfdsfdscsf gdf gdfsrwet ger xcxc dsferhrttsdf ted",
    },
    {
        photoSrc:"https://picsum.photos/500?random=94",
        date:"2026.02.31",
        title:"Koncert gdzieś indziej",
        content:"dsfsdfsdfdsfdsfdsfdscsf gdf gdfsrwet ger xcxc dsferhrttsdf ted",
    },
    {
        photoSrc:"https://picsum.photos/500?random=96",
        date:"2026.02.30",
        title:"AAAAA",
        content:"dsfsdfsdfdsfdsfdsfdscsf gdf gdfsrwet ger xcxc dsferhrttsdf ted",
    },
]

export default function News(){
    // @ts-ignore
    return <div>
        <div className={"page"}>
            <div className={"stickyTop"}>
                <Header/>
                <Navbar/>
            </div>
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
        <MyFooter/>
    </div>
}
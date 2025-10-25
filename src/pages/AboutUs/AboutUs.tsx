import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ContactEntity,{Socials} from "../../components/ContactEntity";
import NewLineToBr from "../../components/NewLineToBr";
import MyFooter from "../../components/MyFooter";
import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import PageInMaking from "../../components/PageInMaking";
import HonorableMentionsItem,{HonorableMentionsItemI} from "../../components/HonorableMentionsItem";
import {defaultLang,getTranslation} from "../../helper/translation";

const bandMembers:Socials[]=[
    {entityName: "Mantikora",
        mainImage: "/mantikoraLogo1.png",
        items1:[
            {icon:"/socials/youtube.png",link:" https://www.youtube.com/@Mantikora-band",name:"youtube"},
            {icon:"/socials/instagram.png",link:"https://www.instagram.com/mantikora_band/",name:"instagram"},
            {icon:"/socials/facebook.png",link:"https://www.facebook.com/profile.php?id=61575692071735",name:"Facebook"},
            {icon:"/socials/twitter.png",link:"https://x.com/mantikora_band",name:"X (twitter)"},
            {icon:"/socials/tiktok.png",link:"https://www.tiktok.com/@mantikora_band",name:"Tik Tok"},
            {icon:"/socials/bandcamp.png",link:" https://mantikora1.bandcamp.com/",name:"Bandcamp"},
            {icon:"/socials/email.png",link:"mailto:mantikoraband@gmail.com",name:"E-mail"},
        ]},
    {entityName: "Filip",
        mainImage: "/socials/JapaneseSoldier.png",
        items1:[
            {icon:"/socials/youtube.png",link:" https://www.youtube.com/404",name:"youtube"},
            {icon:"/socials/instagram.png",link:"https://www.instagram.com/404/",name:"instagram"},
            {icon:"/socials/facebook.png",link:"https://www.facebook.com",name:"Facebook"},
            {icon:"/socials/twitter.png",link:"https://x.com/404",name:"X (twitter)"},
            {icon:"/socials/tiktok.png",link:"https://www.tiktok.com/404",name:"Tik Tok"},
        ]},
    {entityName: "Aleks",
        mainImage: "/socials/Stroomer.png",
        items1:[
            {icon:"/socials/youtube.png",link:" https://www.youtube.com/404",name:"youtube"},
            {icon:"/socials/instagram.png",link:"https://www.instagram.com/404/",name:"instagram"},
            {icon:"/socials/facebook.png",link:"https://www.facebook.com",name:"Facebook"},
            {icon:"/socials/twitter.png",link:"https://x.com/404",name:"X (twitter)"},
            {icon:"/socials/tiktok.png",link:"https://www.tiktok.com/404",name:"Tik Tok"},
        ]},
    {entityName: "*gitarzysta którego nie ma*",
        mainImage: "/socials/JesusChad.png",
        items1:[
            {icon:"/socials/youtube.png",link:" https://www.youtube.com/404",name:"youtube"},
            {icon:"/socials/instagram.png",link:"https://www.instagram.com/404/",name:"instagram"},
            {icon:"/socials/facebook.png",link:"https://www.facebook.com",name:"Facebook"},
            {icon:"/socials/twitter.png",link:"https://x.com/404",name:"X (twitter)"},
            {icon:"/socials/tiktok.png",link:"https://www.tiktok.com/404",name:"Tik Tok"},
        ]},
    {entityName: "Rafał",
        mainImage: "/socials/MonsterBoomer.png",
        items1:[
            {icon:"/socials/youtube.png",link:" https://www.youtube.com/404",name:"youtube"},
            {icon:"/socials/instagram.png",link:"https://www.instagram.com/blacksuide_/#",name:"instagram"},
            {icon:"/socials/facebook.png",link:"https://www.facebook.com",name:"Facebook"},
            {icon:"/socials/twitter.png",link:"https://x.com/404",name:"X (twitter)"},
            {icon:"/socials/tiktok.png",link:"https://www.tiktok.com/404",name:"Tik Tok"},
        ]},

    {entityName: "Janek",
        mainImage: "/socials/HappyNordicChad.png",
        items1:[
            {icon:"/socials/youtube.png",link:" https://www.youtube.com/404",name:"youtube"},
            {icon:"/socials/instagram.png",link:"https://www.instagram.com/404/",name:"instagram"},
            {icon:"/socials/facebook.png",link:"https://www.facebook.com",name:"Facebook"},
            {icon:"/socials/twitter.png",link:"https://x.com/404",name:"X (twitter)"},
            {icon:"/socials/tiktok.png",link:"https://www.tiktok.com/404",name:"Tik Tok"},
        ]},
]
const honorableMentions:HonorableMentionsItemI[]=[
    {
        name:"Michał",
        link:"https://www.facebook.com/profile.php?id=100030973458749",
        linkIcon:"/socials/facebook.png",
        description:"example description",
    }
]


const lorem=new LoremIpsum()

export default function AboutUs(){
    return <div>
        <div className={"page"}>
            <div className={"stickyTop"}>
                <Header/>
                <Navbar/>
            </div>
            <div id={"aboutUsWrapper"}>
                <PageInMaking/>
                <p id={"contactSubHeader"}><NewLineToBr>{lorem.generateParagraphs(1)}</NewLineToBr></p>
                <div id={"socialEntitiesWrapper"}>
                    <section id={"socialEntityItemWrapper"}>
                        {bandMembers.map((item,id)=>(
                            <ContactEntity items={item} key={id}/>
                        ))}
                    </section>
                </div>
            </div>
            <h2 className={"smallHeader"}>{getTranslation(defaultLang,"honorableMentions")}</h2>
            <HonorableMentionsItem item={honorableMentions[0]}/>
            {/*todo: honorable mentions*/}

        </div>
        <MyFooter/>
    </div>
}
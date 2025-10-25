import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ContactEntity from "../../components/ContactEntity";
import NewLineToBr from "../../components/NewLineToBr";
import MyFooter from "../../components/MyFooter";
import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import PageInMaking from "../../components/PageInMaking";
import HonorableMentionsItem from "../../components/HonorableMentionsItem";
import {defaultLang,getTranslation} from "../../helper/translation";
import {bandMembers} from "../../data/bandMembers";
import {honorableMentions} from "../../data/honorableMentions";


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

            <div>
                <p className={"smallHeader centerText"}>{getTranslation(defaultLang,"honorableMentions")}</p>
                <div id={"honorableMentionsWrapper"}>
                {honorableMentions.map((item)=>(
                    <HonorableMentionsItem item={item}/>
                ))}
                </div>
            </div>


        </div>
        <MyFooter/>
    </div>
}
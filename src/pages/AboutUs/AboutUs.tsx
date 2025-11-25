import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ContactEntity from "../../components/ContactEntity";
import MyFooter from "../../components/MyFooter";
import React from "react";
import PageInMaking from "../../components/PageInMaking";
/*import HonorableMentionsItem from "../../components/HonorableMentionsItem";
import {honorableMentions} from "../../data/honorableMentions";
import {getTranslation} from "../../helper/translation";*/
import {bandMembers} from "../../data/bandMembers";
import {AboutUsText} from "../../components/AboutUsText";


export default function AboutUs(){
    return <div>
        <div className={"page"}>
            <div className={"stickyTop"}>
                <Header/>
                <Navbar/>
            </div>
            <div id={"aboutUsWrapper"}>
                <PageInMaking/>
                <AboutUsText/>
                <div id={"socialEntitiesWrapper"}>
                    <section id={"socialEntityItemWrapper"}>
                        {bandMembers.map((item,id)=>(
                            <ContactEntity items={item} key={id}/>
                        ))}
                    </section>
                </div>
            </div>

            {/*<div>
                <p className={"smallHeader centerText"}>{getTranslation(getLanguage(),"honorableMentions")}</p>
                <div id={"honorableMentionsWrapper"}>
                {honorableMentions.map((item)=>(
                    <HonorableMentionsItem item={item}/>
                ))}
                </div>
            </div>*/}


        </div>
        <MyFooter/>
    </div>
}
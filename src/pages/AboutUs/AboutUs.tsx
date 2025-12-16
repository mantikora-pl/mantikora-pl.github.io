import ContactEntity from "../../components/ContactEntity";
import React from "react";
import HonorableMentionsItem from "../../components/HonorableMentionsItem";
import {honorableMentions} from "../../data/honorableMentions";
import {getLanguage,getTranslation} from "../../helper/translation";
import {bandMembers} from "../../data/bandMembers";
import {AboutUsText} from "../../components/AboutUsText";


export default function AboutUs({honorableMentionsOn=false}:{honorableMentionsOn?:boolean}){
    return <div className={"innerPage"}>
        <AboutUsText/>
        <div id={"aboutUsWrapper"}>
            <div id={"socialEntitiesWrapper"}>
                <section id={"socialEntityItemWrapper"}>
                    {bandMembers.map((item,id)=>(
                        <ContactEntity items={item} key={id}/>
                    ))}
                </section>
            </div>
            {honorableMentionsOn&& <div>
                <p className={"smallHeader centerText"}>{getTranslation(getLanguage(),"honorableMentions")}</p>
                <div id={"honorableMentionsWrapper"}>
                    {honorableMentions.map((item)=>(
                        <HonorableMentionsItem item={item}/>
                    ))}
                </div>
            </div>}
        </div>
    </div>
}
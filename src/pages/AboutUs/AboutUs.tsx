import ContactEntity from "../../components/ContactEntity"
import React from "react"
import HonorableMentionsItem from "../../components/HonorableMentionsItem"
import {honorableMentions} from "../../data/honorableMentions"
import {getLanguage,getTranslation} from "../../helper/translation"
import {bandMembers} from "../../data/bandMembers"
import {AboutUsText} from "../../components/AboutUsText"


export default function AboutUs({honorableMentionsOn=false}:{honorableMentionsOn?:boolean}){
    return <div className={"innerPage gradientBackground"}>
        <AboutUsText/>
        <div className={"centeredFlexColumnContainer"}>
            <div className={"flexJustifyCenter"}>
                <section id={"socialEntityItemContainer"}>
                    {bandMembers.map((item,id)=>(
                        <ContactEntity items={item} key={id}/>
                    ))}
                </section>
            </div>
            {honorableMentionsOn?<div>
                <p className={"smallHeader centerText"}>{getTranslation(getLanguage(),"honorableMentions")}</p>
                <section id={"honorableMentionsItemContainer"}>
                    {honorableMentions.map((item)=>(
                        <HonorableMentionsItem item={item}/>
                    ))}
                </section>
            </div>:null}
        </div>
    </div>
}
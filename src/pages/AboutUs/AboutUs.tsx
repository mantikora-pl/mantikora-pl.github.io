import ContactEntity from "../../components/ContactEntity";
import React from "react";
/*import HonorableMentionsItem from "../../components/HonorableMentionsItem";
import {honorableMentions} from "../../data/honorableMentions";
import {getTranslation} from "../../helper/translation";*/
import {bandMembers} from "../../data/bandMembers";


export default function AboutUs(){
    return <div id={"aboutUsWrapper"}>
        <div id={"socialEntitiesWrapper"}>
            <section id={"socialEntityItemWrapper"}>
                {bandMembers.map((item,id)=>(
                    <ContactEntity items={item} key={id}/>
                ))}
            </section>
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
}
import React from "react"
import {AboutUsText} from "../../components/AboutUsText"
import BeholdWidget from "@behold/react";

export default function Home(){
    return <div className={"innerPage skullBackground"}>
        <AboutUsText/>
        <div className={"flexJustifyCenter"} id={"instagramWidgetContainer"}>
            <BeholdWidget feedId="9GO1Tm4URSmW7Uh502yn"/>
        </div>
    </div>
}
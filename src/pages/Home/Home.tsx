import React from "react"
import {AboutUsText} from "../../components/AboutUsText"

export default function Home(){
    return <div className={"innerPage gradientBackground"}>
        <AboutUsText/>
        <div className={"flexJustifyCenter"}>
            <iframe src="https://app.mirror-app.com/feed-instagram/1b46c940-6f7b-48ed-ac53-7599deed245f/preview"
                    style={{width:"100%",height:"800px",border:"none"}}
                    title={"ig"}
            ></iframe>
        </div>
    </div>
}
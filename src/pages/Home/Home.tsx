import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import MyFooter from "../../components/MyFooter";
import React from "react";
import PageInMaking from "../../components/PageInMaking";
import {AboutUsText} from "../../components/AboutUsText";

export default function Home(){
    return <div>
        <div className={"page"}>
            <div className={"stickyTop"}>
                <Header/>
                <Navbar/>
            </div>
            <PageInMaking/>
            <AboutUsText/>
            <div style={{ display:'flex',justifyContent:'center' }}>
                <iframe src="https://app.mirror-app.com/feed-instagram/1b46c940-6f7b-48ed-ac53-7599deed245f/preview"
                        style={{width:"100%",height:"800px",border:"none"}}
                        title={"ig"}
                ></iframe>
            </div>
        </div>
        <MyFooter/>
    </div>
}
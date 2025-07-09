import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { InstagramEmbed } from 'react-social-media-embed';
import MyFooter from "../../components/MyFooter";
import React from "react";
import {BrowserView} from "react-device-detect";

export default function Home(){
    return <div>
        <div className={"page"}>
            <div className={"stickyTop"}>
                <Header/>
                <Navbar/>
            </div>
            <p>STRONA W PRZYGOTOWANIU WIĘKSZOŚĆ INFORMACJI TO TYLKO TEMPLATE</p>
            <BrowserView>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed url={"https://www.instagram.com/mantikora_band/"} width={600} captioned/>
                </div>
            </BrowserView>
        </div>
        <MyFooter/>
    </div>
}
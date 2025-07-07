import React from 'react'
import './style.css'
import MyFooter from "../MyFooter";
import Header from "../Header";
import Navbar from "../Navbar";

export interface PersonalData{
    photo:string,
    name:string

}

export default function Person({person}:{person: PersonalData}){
    return <div>
        <div className={"page"}>
            <div className={"stickyTop"}>
                <Header/>
                <Navbar/>
            </div>
            <main className={"personMain"}>

                <div className={"personLeft"}>
                    <img src={person.photo} alt={"sample random image"} className={"personPhoto"}/>
                </div>
                <div className={"personRight"}>
                    <p className={"personName"}>{person.name}</p>
                </div>
            </main>
            <MyFooter/>
        </div>
    </div>
}
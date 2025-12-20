import React from 'react'
import './style.css'
import MyFooter from "../MyFooter"
import Header from "../Header"
import Navbar from "../Navbar"
import NewLineTo2Br from "../NewLineTo2Br"

export interface PersonalData{
    photo:string,
    name:string,

    equipment?:{
        name:string,
        brands:string
    }[]

    basicInfo?:{
        item:string,
        value:string
    }[]

    favorites?:{
        item:string,
        value:string
    }[]

    funStuff?:{
        item:string,
        value:string
    }[]

}

/*height?:string,
weight?:string,
hair?:string,*/

export default function Person({person}:{person:PersonalData}){
    return <div>
        <div className={"page"}>
            <div className={"stickyTop"}>
                <Header/>
                <Navbar/>
            </div>
            <main className={"personMain"}>

                <div className={"personLeft"}>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={person.photo} alt={"sample random image"} className={"personPhoto"}/>
                    <div className={"leftInner"}>
                        <p className={"partHeader"}>GEAR</p>
                        {person.equipment?
                            <div>
                                {person.equipment.map((item,i)=>(
                                    <div>
                                        <p className={"smallHeader"}>{item.name}</p>
                                        <p className={"gearText"}><NewLineTo2Br>{item.brands}</NewLineTo2Br></p>
                                    </div>
                                ))}

                            </div>
                            :null}
                    </div>
                </div>
                <div className={"personRight"}>
                    <p className={"partHeader personName"}>{person.name}</p>
                    {person.basicInfo?
                        <div>
                            {person.basicInfo.map((info,id)=>(
                                <div>
                                    <p className={"infoText"}><strong>{info.item}</strong>: {info.value}</p>
                                </div>
                            ))}
                        </div>:null}
                    <p className={"partHeader"}>Favorites</p>
                    {person.favorites?
                        <div>
                            {person.favorites.map((info,id)=>(
                                <div>
                                    <p className={"infoText"}><strong>{info.item}</strong>: {info.value}</p>
                                </div>
                            ))}
                        </div>:null}
                    <p className={"partHeader"}>Other shit idk</p>
                    {person.funStuff?
                        <div>
                            {person.funStuff.map((info,id)=>(
                                <div>
                                    <p className={"infoText"}><strong>{info.item}</strong>: {info.value}</p>
                                </div>
                            ))}
                        </div>:null}
                </div>
            </main>
            <MyFooter/>
        </div>
    </div>
}
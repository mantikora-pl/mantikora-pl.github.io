import React from 'react'
import './style.css'
import MyFooter from "../MyFooter";
import Header from "../Header";
import Navbar from "../Navbar";

export interface PersonalData{
    photo:string,
    guitars?:string[],
    picks?:string[],
    strings?:string[],
    drumsticks?:string[],
    drums?:string[],
    cymbals?:string[],
    heads?:string[],
    amps?:string[],
    otherEquipment?:string[],

    otherInstruments?:string,
    name:string,
    dob?:string,
    birthplace?:string,
    height?:string,
    weight?:string,
    eyes?:string,
    hair?:string,
    status?:string,
    siblings?:string,
    firstBand?:string,
    otherBands?:string,
    favBand?:string,
    favAlbum?:string,
    favMovie?:string,
    favBook?:string,
    fav_historical?:string,
    fav_holiday?:string,
    fav_solo?:string,
    fav_venue?:string,
    fav_tvShow?:string,
    fav_hobbies?:string,
    fav_guitar?:string,
    fav_sport?:string,
    fav_season?:string,
    fav_albumCoverArt?:string,
    fav_number?:string,
    fav_tech?:string,
    fav_vacation?:string,
    fav_website?:string,
    fav_holidaySong?:string,
    fav_mantikoraSong?:string,
    occupationIfNotMusician?:string,
    musicalInfluences?:string,
    firstConcertSeen?:string,
    fondestMemory?:string,
    mostMemorableConcert?:string,
    whenTimeMachine?:string
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

                    <div className={"leftInner"}>
                    <p className={"partHeader"}>GEAR</p>
                    {person.guitars&&
                        <div>
                            <p className={"smallHeader"}>Guitars</p>
                            <div>
                                {person.guitars.map((brand,i)=>(
                                    <p className={"gearText"}>{brand}</p>
                                ))}
                            </div>
                        </div>
                    }
                    {person.picks&&
                        <div>
                            <p className={"smallHeader"}>Picks</p>
                            <div>
                                {person.picks.map((brand,i)=>(
                                    <p className={"gearText"}>{brand}</p>
                                ))}
                            </div>
                        </div>
                    }
                    {person.strings&&
                        <div>
                            <p className={"smallHeader"}>Strings</p>
                            <div>
                                {person.strings.map((brand,i)=>(
                                    <p className={"gearText"}>{brand}</p>
                                ))}
                            </div>
                        </div>
                    }
                    {person.drumsticks&&
                        <div>
                            <p className={"smallHeader"}>Drumsticks</p>
                            <div>
                                {person.drumsticks.map((brand,i)=>(
                                    <p className={"gearText"}>{brand}</p>
                                ))}
                            </div>
                        </div>
                    }
                    {person.drums&&
                        <div>
                            <p className={"smallHeader"}>Drums</p>
                            <div>
                                {person.drums.map((brand,i)=>(
                                    <p className={"gearText"}>{brand}</p>
                                ))}
                            </div>
                        </div>
                    }
                    {person.cymbals&&
                        <div>
                            <p className={"smallHeader"}>Cymbals</p>
                            <div>
                                {person.cymbals.map((brand,i)=>(
                                    <p className={"gearText"}>{brand}</p>
                                ))}
                            </div>
                        </div>
                    }
                    {person.heads&&
                        <div>
                            <p className={"smallHeader"}>Heads</p>
                            <div>
                                {person.heads.map((brand,i)=>(
                                    <p className={"gearText"}>{brand}</p>
                                ))}
                            </div>
                        </div>
                    }
                    {person.amps&&
                        <div>
                            <p className={"smallHeader"}>Amps</p>
                            <div>
                                {person.amps.map((brand,i)=>(
                                    <p className={"gearText"}>{brand}</p>
                                ))}
                            </div>
                        </div>
                    }
                    {person.otherEquipment&&
                        <div>
                            <p className={"smallHeader"}>Other equipment</p>
                            <div>
                                {person.otherEquipment.map((brand,i)=>(
                                    <p className={"gearText"}>{brand}</p>
                                ))}
                            </div>
                        </div>
                    }
                    </div>
                </div>



                <div className={"personRight"}>
                    <p className={"personName"}>{person.name}</p>
                </div>
            </main>
            <MyFooter/>
        </div>
    </div>
}
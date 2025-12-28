import React,{useState} from 'react'
import News from './pages/News/News'
import Home from './pages/Home/Home'
import './App.css'
import './Var.css'
import {HashRouter,Route,Routes} from 'react-router-dom'
import Tour from "./pages/Tour/Tour"
import Discography from "./pages/Discography/Discography"
import Lyrics from "./pages/Lyrics/Lyrics"
import BandTimeline from "./pages/BandTimeline/BandTimeline"
import AboutUs from "./pages/AboutUs/AboutUs"
//import Person,{PersonalData} from "./components/Person"
import NotFound from "./pages/404/404"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import PageInMaking from "./components/PageInMaking"
import MyFooter from "./components/MyFooter"
import NewsArticle from "./pages/NewsArticle/NewsArticle";
import {mock} from "./data/mock";

/*
const sample:PersonalData={
    name:"sample",
    photo:"https://picsum.photos/400?random=4",

    equipment:[
        {name:"guitars",brands:"Jackson \n Ibanez"},
        {name:"picks",brands:"some picks"},
        {name:"strings",brands:"d'daddario \n ernie ball \n jakieśtam inne"},
        {name:"amps",brands:"marshall \n boss"},
        {name:"other equipment", brands:"Dunlop slider \n wah wah \n nie wiem"}
    ],
    basicInfo:[
        {item:"DOB",value:"2003"},
        {item:"status",value:"???"},
        {item:"eyes",value:"???"},
        {item:"siblings",value:"???"},
        {item:"first band",value:"???"},
        {item:"other bands",value:"???"},
    ],
    favorites:[
        {item:"band",value:"???"},
        {item:"album",value:"???"},
        {item:"movie",value:"???"},
        {item:"siblings",value:"???"},
        {item:"book",value:"???"},
        {item:"food",value:"???"},
        {item:"language",value:"???"},
        {item:"historical figure",value:"???"},
        {item:"holiday",value:"???"},
        {item:"solo",value:"???"},
        {item:"riff",value:"???"},
        {item:"venue",value:"???"},
        {item:"tv visible",value:"???"},
        {item:"hobbies",value:"???"},
        {item:"guitar",value:"???"},
        {item:"sport",value:"???"},
        {item:"season",value:"???"},
        {item:"album cover art",value:"???"},
        {item:"number",value:"???"},
        {item:"piece of tech",value:"???"},
        {item:"vacation",value:"???"},
        {item:"website",value:"???"},
        {item:"holiday song",value:"???"},
        {item:"mantikora song",value:"???"},
        {item:"anime/manga",value:"???"},
    ],
    funStuff:[
        {item:"Other instruments played: ",value:"2003"},
        {item:"Occupation if not musician: ",value:"???"},
        {item:"Musical influences: ",value:"???"},
        {item:"First concert seen: ",value:"???"},
        {item:"Fondest memory: ",value:"???"},
        {item:"Most memorable concert: ",value:"???"},
        {item:"What year would you go to in time machine? ",value:"???"},
    ],
}
*/

const routes=[
    {path:'/',element:<Home/>},
    {path:'/news',element:<News/>},
    {path:'/tour',element:<Tour/>},
    {path:'/discography',element:<Discography/>},
    {path:'/lyrics',element:<Lyrics/>},
    {path:'/timeline',element:<BandTimeline/>},
    {path:'/aboutus',element:<AboutUs/>},
    {path:"/article/:id",element:<NewsArticle/>},
    {path:'*',element:<NotFound/>},
    /*{path:'/about/:filip',element:<Person person={sample}/>}*/
]

function App(){
    const [sideMenuVisible,setSideMenuVisible]=useState(false)
    return (
        <HashRouter>
            <div>
                <div className={"page"} style={{cursor:"url('cursor.cur'), auto"}}>
                    <span id={"top"}/>
                    <div className={"stickyTop"}>
                        <Header setSideMenuVisible={setSideMenuVisible} sideMenuVisible={sideMenuVisible}/>
                        <Navbar setSideMenuVisible={setSideMenuVisible} sideMenuVisible={sideMenuVisible}/>
                    </div>
                    {mock?<PageInMaking/>:null}
                    <Routes>
                        {routes.map(({path,element})=>(
                            <Route key={path} path={path} element={element}/>
                        ))}
                    </Routes>
                </div>
                <MyFooter/>
            </div>

        </HashRouter>
    )
}

export default App

import React from 'react'
import News from './pages/News/News'
import Home from './pages/Home/Home'
import './App.css'
import './Var.css'
import {HashRouter,Route,Routes} from 'react-router-dom';
import Tour from "./pages/Tour/Tour";
import Discography from "./pages/Discography/Discography";
import Lyrics from "./pages/Lyrics/Lyrics";
import BandTimeline from "./pages/BandTimeline/BandTimeline";
/*import Gallery from "./pages/Gallery/Gallery";*/
import AboutUs from "./pages/AboutUs/AboutUs";
//import Person,{PersonalData} from "./components/Person";
import NotFound from "./pages/404/404";

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
    {path:'/history',element:<BandTimeline/>},
    {path:'/contact',element:<AboutUs/>},
    {path:'*',element:<NotFound/>},
    /*{path:'/about/:filip',element:<Person person={sample}/>}*/
]

function App(){
    return (
        <HashRouter>
            <div>
                <Routes>
                    {routes.map(({path,element})=>(
                        <Route key={path} path={path} element={element}/>
                    ))}
                </Routes>
            </div>
        </HashRouter>
    )
}

export default App

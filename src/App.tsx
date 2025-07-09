import React from 'react'
import News from './pages/News/News'
import Home from './pages/Home/Home'
import './App.css'
import {BrowserRouter as Router,HashRouter,Route,Routes} from 'react-router-dom';
import Tour from "./pages/Tour/Tour";
import Discography from "./pages/Discography/Discography";
import Lyrics from "./pages/Lyrics/Lyrics";
import History from "./pages/History/History";
/*import Gallery from "./pages/Gallery/Gallery";*/
import AboutUs from "./pages/AboutUs/AboutUs";
import Person,{PersonalData} from "./components/Person";
import NotFound from "./pages/404/404";

const filip:PersonalData={
    name:"Filip",
    photo:"https://picsum.photos/450?random=4",
    guitars:[
        "Jackson",
        "Ibanez"
    ],
    picks:[
        "some picks"
    ],
    strings:[
        "d'daddario",
        "ernie ball",
        "jakieśtam inne"
    ],
    amps:[
        "something something"
    ],
    otherEquipment:[
        "coś jeszcze",
        "kolejne coś jeszcze"
    ]
}


const routes=[
    {path:'/',element:<Home/>},
    {path:'/news',element:<News/>},
    {path:'/tour',element:<Tour/>},
    {path:'/discography',element:<Discography/>},
    {path:'/lyrics',element:<Lyrics/>},
    {path:'/history',element:<History/>},
    {path:'/contact',element:<AboutUs/>},
    {path:'/about/:filip',element:<Person person={filip}/>},
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

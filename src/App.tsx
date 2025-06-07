import React from 'react'
import News from './pages/News/News'
import Home from './pages/Home/Home'
import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Tour from "./pages/Tour/Tour";
import Discography from "./pages/Discography/Discography";
import Lyrics from "./pages/Lyrics/Lyrics";
import History from "./pages/History/History";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";


const routes=[
    {path:'/',element:<Home/>},
    {path:'/news',element:<News/>},
    {path:'/tour',element:<Tour/>},
    {path:'/discography',element:<Discography/>},
    {path:'/lyrics',element:<Lyrics/>},
    {path:'/history',element:<History/>},
    {path:'/gallery',element:<Gallery/>},
    {path:'/contact',element:<Contact/>},
]

function App(){
    return (
        <Router>
            <div>
                <Routes>
                    {routes.map(({path,element})=>(
                        <Route key={path} path={path} element={element}/>
                    ))}
                </Routes>
            </div>
        </Router>
    )
}

export default App

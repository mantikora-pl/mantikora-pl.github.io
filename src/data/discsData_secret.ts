import {defaultLang,getTranslation} from "../helper/translation";
import {Disc} from "../components/DiscList";
import {single} from "./discsData";

export const discsData_secret:Disc[]=[
    {
        title:"TBA",
        date:"XX.XX.2026",
        coverArtSrc:"https://picsum.photos/500?random=3",
        songs:[
            "Parasite",
            "Potop biblijny",
            "Nie ma nic po śmierci lol",
            "Ballada o chujwieczym",
            "Intro jako osobny utwór",
            "Gułagi",
            "Organy",
            "Dziwne odłogsy",
            "Mantikora (chimera blood)",
            "A Dream about War, I Saw"
        ],
        credits:""
    },
    {
        title:"M.I.N.D",
        date:"XX.XX.2026",
        coverArtSrc:"/mind.png",
        songs:[
            "Devil's Mouth"+single,
            "Davy Jones's Locker",
            "Anima Sola"+single,
            "Herxheim",
            "The Hanged Man XII",
            "Judgement XX",
            "Vanitas"+single,
            "Kompania",
            "MIND"+single,
        ],
        credits:getTranslation(defaultLang,"writtenByEveryone")
    },
    {
        title:"Devil's Mouth - demo",
        date:"XX.12.2025",
        coverArtSrc:"/devilsMouth.png",
        songs:[
            "Devil's Mouth",
            "Vanitas",
            "Kompania",
            "MIND",
        ],
        credits:getTranslation(defaultLang,"writtenByEveryone")
    },
]

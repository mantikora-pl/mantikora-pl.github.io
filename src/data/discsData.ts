import {Disc} from "../components/DiscList";
import {defaultLang,getTranslation} from "../helper/translation";

export const single=" ("+getTranslation(defaultLang,"single")+")"


export const discsData:Disc[]=[
    {
        title:"M.I.N.D",
        date:"XX.XX.2026",
        coverArtSrc:"https://picsum.photos/500?random=1",
        songs:[
            "Devil's Mouth"+single,
            "Davy Jones's Locker",
            "Vanitas"+single,
            "MIND"+single,
            "TBA",
            "TBA",
            "TBA",
            "TBA",
            "TBA"
        ],
        credits:getTranslation(defaultLang,"writtenByEveryone")
    },
    {
        title:"Devil's Mouth - demo",
        date:"XX.12.2025",
        coverArtSrc:"https://picsum.photos/500?random=2",
        songs:[
            "Devil's Mouth",
            "Vanitas",
            "Davy Jones's Locker",
            "MIND",
        ],
        credits:getTranslation(defaultLang,"writtenByEveryone")
    },
]

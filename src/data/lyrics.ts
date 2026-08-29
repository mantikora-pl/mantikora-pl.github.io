import {LyricsItems} from "../components/LyricsItem";
import {getLanguage,getTranslation} from "../helper/translation";
//import {secretLyricsConst} from "./lyrics_secret";

export const lyricsList_real:string[]=[
"Lyrics coming soon",
    "Lyrics coming soon",
    "Lyrics coming soon",
    "Lyrics coming soon",
    "Lyrics coming soon",
    "Lyrics coming soon",
    "Lyrics coming soon",

]
const lyrics=lyricsList_real

export const songs: LyricsItems[] = [
    {
        id: 1,
        name: "Devil's Mouth",
        lyrics: lyrics[0] ?? getTranslation(getLanguage(),"comingSoon"),
    },
    {
        id: 2,
        name: "Vanitas",
        lyrics: lyrics[1] ?? getTranslation(getLanguage(),"comingSoon"),
    },
    {
        id: 3,
        name: "Davy Jones's Locker",
        lyrics: lyrics[2] ?? getTranslation(getLanguage(),"comingSoon"),
    },
    {
        id: 4,
        name: "MIND",
        lyrics: lyrics[3] ?? getTranslation(getLanguage(),"comingSoon"),
    },
    {
        id:5,
        name:"December Mars",
        lyrics: lyrics[4] ?? getTranslation(getLanguage(),"comingSoon")
    },
    {
        id:6,
        name:"Herxheim",
        lyrics: lyrics[5] ?? getTranslation(getLanguage(),"comingSoon")
    },
    {
        id:7,
        name:"Anima Sola",
        lyrics: lyrics[6] ?? getTranslation(getLanguage(),"comingSoon")
    },
];
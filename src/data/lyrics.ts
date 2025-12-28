import {LyricsItems} from "../components/LyricsItem";
import {getLanguage,getTranslation} from "../helper/translation";

export const lyricsList_real:string[]=[
"Lyrics coming soon",
    "Lyrics coming soon",
    "Lyrics coming soon",
    "Lyrics coming soon",
    "Lyrics coming soon",
    "Lyrics coming soon",
    "Lyrics coming soon",

]

export const songs: LyricsItems[] = [
    {
        id: 1,
        name: "Devil's Mouth",
        lyrics: lyricsList_real[0] ?? getTranslation(getLanguage(),"comingSoon"),
    },
    {
        id: 2,
        name: "Vanitas",
        lyrics: lyricsList_real[1] ?? getTranslation(getLanguage(),"comingSoon"),
    },
    {
        id: 3,
        name: "Davy Jones's Locker",
        lyrics: lyricsList_real[2] ?? getTranslation(getLanguage(),"comingSoon"),
    },
    {
        id: 4,
        name: "MIND",
        lyrics: lyricsList_real[3] ?? getTranslation(getLanguage(),"comingSoon"),
    }
];
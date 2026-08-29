import Cookies from "universal-cookie"

export const translations={
    "main":{
        "en":"Home",
        "pl":"Główna"
    },
    "news":{
        "en":"News",
        "pl":"Nowości"
    },
    "tour":{
        "en":"Tour",
        "pl":"Trasa"
    },
    "discography":{
        "en":"Discography",
        "pl":"Dyskografia"
    },
    "lyrics":{
        "en":"Lyrics",
        "pl":"Teksty"
    },
    "timeline":{
        "en":"Timeline",
        "pl":"Oś czasu"
    },
    "aboutus":{
        "en":"About us",
        "pl":"Zespół"
    },

    "main-short":{
        "en":"Home",
        "pl":"Główna"
    },
    "news-short":{
        "en":"News",
        "pl":"Wieści"
    },
    "tour-short":{
        "en":"Tour",
        "pl":"Trasa"
    },
    "discography-short":{
        "en":"CDs",
        "pl":"Płyty"
    },
    "lyrics-short":{
        "en":"Lyrics",
        "pl":"Teksty"
    },
    "timeline-short":{
        "en":"History",
        "pl":"Oś"
    },
    "aboutus-short":{
        "en":"Band",
        "pl":"O nas"
    },


    "merch":{
        "en":"Store",
        "pl":"Sklep"
    },
    "our-cds":{
        "en":"Our releases",
        "pl":"Nasze albumy"
    },
    "single":{
        "en":"single",
        "pl":"singiel"
    },
    "page-in-making":{
        "en":"THE PAGE IS IN MAKING, MOST OF THE INFORMATION IS JUST A TEMPLATE",
        "pl":"STRONA W PRZYGOTOWANIU WIĘKSZOŚĆ INFORMACJI TO TYLKO TEMPLATE"
    },
    "aboutUsText":{
        "en":"We're a thrash metal band from Poznan, Poland.\n"+
            "We've been going since April 2025, we recorded a demo with 4 songs, and have more coming.\n"+
            "Ready to play live in ~2-3 months \n"+
            "We're aiming to drop a single this year, so stay tuned! \n"+
            "Meanwhile, we invite you to follow us on our social media profiles.",
        "pl":"Jesteśmy młodym zespołem thrash metalowym z Poznania.\n" +
            "Powstaliśmy w kwietniu 2025 roku, nagraliśmy demo z 4 utworami, i piszemy więcej, "+
            "niedługo wyjdzie singiel. \n"+
            "Będziemy gotowi na koncerty za ok. 2-3 miesiące, \n"+
            "a w międzyczasie zapraszamy do odwiedzenia naszych profili na mediach społecznościowych."
    },
    "writtenByEveryone":{
        "en":"Written by Filip & Aleks",
        "pl":"Utwór napisany przez Filipa i Aleksa"
    },
    "honorableMentions":{
        "en":"Honorable mentions: ",
        "pl":"Podziękowania dla: "
    },
    "sortByLocation":{
        "en":"Order by distance",
        "pl":"Sortuj po odległości"
    },
    "sortByDate":{
        "en":"Order by date",
        "pl":"Sortuj po dacie"
    },

    "timelineDesc-1":{
        "en":"We've met for the first time and started working on our first song - Devil's Mouth",
        "pl":"Spotkaliśmy się poraz pierwszy, zaczęliśmy pracować nad pierwszym wspólnyn utwórem - Devil's Mouth"
    },
    "timelineSubTitle-1":{
        "en":"",
        "pl":""
    },

    "timelineDesc-2":{
        "en":"We got our logo",
        "pl":"Powstało logo"
    },
    "timelineSubTitle-2":{
        "en":"",
        "pl":""
    },

    "timelineDesc-3":{
        "en":"First rehearsal together",
        "pl":"Pierwsza próba"
    },
    "timelineSubTitle-3":{
        "en":"",
        "pl":""
    },
    "timelineDesc-4":{
        "en":"First rehersal with all 5 band members",
        "pl":"Pierwsza próba w pełnym składzie"
    },
    "timelineSubTitle-4":{
        "en":"",
        "pl":""
    },

    "timelineDesc-5":{
        "en":"In first half of 2026 we've recorded our demo which isn't public yet",
        "pl":"W pierwszej połowie 2026 nagraliśmy demo, które nie jest publiczne"
    },
    "timelineSubTitle-5":{
        "en":"",
        "pl":""
    },
    "daysLeft":{
        "en":" days left",
        "pl":" dni"
    },
    "unknown":{
        "en":"Unknown",
        "pl":"nieznany"
    },
    "previous":{
        "en":"previous",
        "pl":"poprzednia"
    },
    "next":{
        "en":"next",
        "pl":"następna"
    },
    "tickets":{
        "en":"Tickets",
        "pl":"Bilety"
    },
    "approxLocation":{
        "en":"approximate location based on country",
        "pl":"lokalizacja bazowana na kraju, nie mieście"
    },
    "concertSearch":{
        "en":"Concert name/location",
        "pl":"Nazwa/miejsce koncertu"
    },
    "search":{
        "en":"Search",
        "pl":"Szukaj"
    },
    "comingSoon":{
        "en":"lyrics coming soon",
        "pl":"tekst będzie dostepny niedługo"
    },
    "noNews":{
        "en":"No articles are available yet",
        "pl":"Nie ma jeszcze artykułów"
    },
    "noConcerts":{
        "en":"No concerts dates yet",
        "pl":"Póki co nie ma koncertów"
    }


} as const

export function getTranslation(locale:string,key:string):string{
    const translation=translations[key as keyof typeof translations]
    return translation?.[locale as keyof typeof translation]||""
}


interface ILanguage{
    nameInSelf: string,
    icon: string,
    code: string
}
export const languagesData:ILanguage[]=[
    {
        nameInSelf:"english",
        icon:"🇺🇸",
        code:"en"
    },
    {
        nameInSelf:"polski",
        icon:"🇵🇱",
        code:"pl"
    }
]

export const cookies=new Cookies()
export function getLanguage(){
    if(!Boolean(cookies.get('language'))){
        const codeFromBrowser=navigator.language.substring(0,2)
        if(languagesData.some(lang => lang.code === codeFromBrowser))
            cookies.set('language',codeFromBrowser,{path:"/"})
        else
            cookies.set('language',"en",{path:"/"})
    }
    return cookies.get("language")
}

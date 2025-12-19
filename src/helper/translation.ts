import Cookies from "universal-cookie"

export const translations={
    "main":{
        "en":"Main",
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
    "history":{
        "en":"Timeline",
        "pl":"Oś czasu"
    },
    "band":{
        "en":"Band",
        "pl":"Zespół"
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
            "We've been going since April 2025, we have a few of our own songs, and we're working on our demo.\n"+
            "We're aiming to drop our first album and hit the stage in 2026, so stay tuned! \n"+
            "Meanwhile, we invite you to follow us on our social media profiles.",
        "pl":"Jesteśmy młodym zespołem thrash metalowym z Poznania.\n" +
            "Powstaliśmy w kwietniu 2025 roku, obecnie mamy kilka autorskich utworów i pracujemy nad demo.\n"+
            "Planujemy wydać pierwszy album i zacząć koncertować w 2026, także czekajcie na nas! \n"+
            "a w międzyczasie zapraszamy do odwiedzenia naszych profili na mediach społecznościowych."
    },
    "writtenByEveryone":{
        "en":"Written by the whole band",
        "pl":"Napisany przez cały zespół"
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
        "en":"We've started to work on our first song - Devil's Mouth",
        "pl":"Zaczyna powstawać pierwszy wspólny utwór - Devil's Mouth"
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
        "en":"Zespół w pełnym składzie",
        "pl":"Zespół w pełnym składzie"
    },
    "timelineSubTitle-4":{
        "en":"",
        "pl":""
    },

    "timelineDesc-5":{
        "en":"We've recorded our demo",
        "pl":"Zostaje nagrane demo"
    },
    "timelineSubTitle-5":{
        "en":"",
        "pl":""
    },
    "daysLeft":{
        "en":" days to",
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
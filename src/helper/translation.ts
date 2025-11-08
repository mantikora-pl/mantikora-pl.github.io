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
        "en":"to do later",
        "pl":"tu będzie o nas"
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
        "en":"Sort concerts by location",
        "pl":"Sortuj koncerty po odległości"
    },
    "sortByDate":{
        "en":"Sort concerts by date",
        "pl":"Sortuj koncerty po dacie"
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

} as const

export function getTranslation(locale:string,key:string):string{
    const translation=translations[key as keyof typeof translations]
    return translation?.[locale as keyof typeof translation]||""
}
const validLanguages=["en","pl"]
const code=navigator.language.substring(0,2)

export const defaultLang=validLanguages.includes(code)?code:"en"
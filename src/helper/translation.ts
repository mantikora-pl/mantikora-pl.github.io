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
        "en":"Band History",
        "pl":"Historia zespołu"
    },

    "gallery":{
        "en":"Gallery",
        "pl":"Galeria"
    },
    "contact":{
        "en":"About us",
        "pl":"O nas"
    },
    "merch":{
        "en":"Store",
        "pl":"Sklep"
    },
} as const

export function getTranslation(locale:string,key:string):string{
    const translation=translations[key as keyof typeof translations]
    return translation?.[locale as keyof typeof translation]||""
}
const validLanguages=["en","pl"]
const code=navigator.language.substring(0,2)

export const defaultLang=validLanguages.includes(code)?code:"en"
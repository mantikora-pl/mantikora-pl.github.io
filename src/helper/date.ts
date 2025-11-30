import {getLanguage} from "./translation";

export interface EventDate{
    year:number
    month:string
    day:number
}

const dateTranslations={
    1:{
        "en":"January",
        "pl":"Stycznia"
    },
    2:{
        "en":"February",
        "pl":"Lutego"
    },
    3:{
        "en":"March",
        "pl":"Marca"
    },
    4:{
        "en":"April",
        "pl":"Kwietnia"
    },
    5:{
        "en":"May",
        "pl":"Maja"
    },
    6:{
        "en":"June",
        "pl":"Czerwca"
    },
    7:{
        "en":"July",
        "pl":"Lipca"
    },
    8:{
        "en":"August",
        "pl":"Sierpnia"
    },
    9:{
        "en":"September",
        "pl":"Września"
    },
    10:{
        "en":"October",
        "pl":"Października"
    },
    11:{
        "en":"November",
        "pl":"Listopada"
    },
    12:{
        "en":"December",
        "pl":"Grudnia"
    }
}

export function getMonthTranslation(locale:string,key:number):string{
    const translation=dateTranslations[key as keyof typeof dateTranslations]
    return translation?.[locale as keyof typeof translation]||""
}
export function translateDate(year:number,month:number,day:number,lang:string):EventDate{
    return {
        year,
        month: getMonthTranslation(lang,month),
        day
    }
}

export function currentDate(){
    return {
        year:new Date().getFullYear(),
        month:new Date().getMonth()+1,
        day:new Date().getDate()
    }
}

export function daysToEvent(eventDate:{year:number,month:number,day:number}):number{
    const start=new Date(currentDate().year,currentDate().month-1,currentDate().day)
    const end=new Date(eventDate.year,eventDate.month-1,eventDate.day)
    const timeDifference=end.getTime()-start.getTime()
    return Math.ceil(timeDifference/(1000*3600*24))
}

export function localizeDate(year:number,month:number,day:number){
    switch (getLanguage()){
        case "en":
            return getMonthTranslation(getLanguage(),month)+" "+day+", "+year;
        case "pl":
            return day+" "+getMonthTranslation(getLanguage(),month)+" "+year;
    }

}
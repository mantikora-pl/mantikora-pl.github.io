import {getLanguage,getTranslation} from "./translation"

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
//todo: add conjugation for polish. day missing-> not conjugated

const weekTranslations={
    0:{
        "en":"Sunday",
        "pl":"niedziela"
    },
    1:{
        "en":"Monday",
        "pl":"poniedziałek",
    },
    2:{
        "en":"Tuesday",
        "pl":"wtorek"
    },
    3:{
        "en":"Wednesday",
        "pl":"środa"
    },
    4:{
        "en":"Thursday",
        "pl":"czwartek"
    },
    5:{
        "en":"Friday",
        "pl":"piątek"
    },
    6:{
        "en":"Saturday",
        "pl":"sobota"
    }
}

export function getMonthTranslation(locale:string,key:number):string{
    const translation=dateTranslations[key as keyof typeof dateTranslations]
    return translation?.[locale as keyof typeof translation]||""
}

export function translateDate(year:number,month:number,day:number,lang:string):EventDate{
    return {
        year,
        month:getMonthTranslation(lang,month),
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
    const now=new Date()
    const start=new Date(currentDate().year,currentDate().month-1,currentDate().day)
    const end=new Date(eventDate.year,eventDate.month-1,eventDate.day)
    const timeDifference=end.getTime()-start.getTime()
    let daysLeft=Math.ceil(timeDifference/(1000*3600*24))
    return (now.getHours()>=19)?daysLeft-1:daysLeft
}

export function localizeDate(year:number,month:number,day:number){
    switch(getLanguage()){
        case "en":
            return getMonthTranslation(getLanguage(),month)+" "+day+", "+year
        case "pl":
            return day+" "+getMonthTranslation(getLanguage(),month)+" "+year
    }
}

export function dayOfTheWeek(year:number,month:number,day:number):number{
    try{
        const date=new Date(year,month-1,day)
        return date.getDay()
    }
    catch(e){
        return -1
    }
}

export function localDayOfTheWeek(locale:string,day:number){
    if(day<0||day>6) return getTranslation(locale,"unknown")
    const translation=weekTranslations[day as keyof typeof weekTranslations]
    return translation?.[locale as keyof typeof translation]||""
}
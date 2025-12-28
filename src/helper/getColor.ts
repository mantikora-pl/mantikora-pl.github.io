export function getColor(value:number,green:number=40,yellow:number=200,red:number=1000){
    if(value<green){
        return `rgb(56,156,20)`
    }
    else if(value<yellow){
        const ratio=(value-green)/(yellow-green)
        const calculatedRed=Math.round(56+(176*ratio))
        const calculatedGreen=Math.round(156+(84*ratio))
        const calculatedBlue=Math.round(20+(-8*ratio))
        return `rgb(${calculatedRed}, ${calculatedGreen}, ${calculatedBlue})`
    }
    else if(value===yellow){
        return `rgb(232,240,12)`
    }
    else if(value<red){
        const ratio=(value-yellow)/(red-yellow)
        const calculatedRed=Math.round(232+(-45*ratio))
        const calculatedGreen=Math.round(240+(-213*ratio))
        const calculatedBlue=Math.round(12+(-12*ratio))
        return `rgb(${calculatedRed}, ${calculatedGreen}, ${calculatedBlue})`
    }
    else{
        return `rgb(187,27,0)`
    }
}
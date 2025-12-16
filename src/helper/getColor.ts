export function getColor(value:number,green:number=40,yellow:number=200,red:number=1000){
    if(value<green){
        return '#389c14'
    }
    else if(value<yellow){
        const ratio=(value-10)/90
        const red=Math.round(56+(201*ratio))
        const green=156
        const blue=Math.round(20+(12*ratio))
        return `rgb(${red}, ${green}, ${blue})`
    }
    else if(value===yellow){
        return '#e8f00c'
    }
    else if(value<red){
        const ratio=(value-100)/500
        const red=Math.round(232+(24*ratio))
        const green=Math.round(240-(228*ratio))
        const blue=12
        return `rgb(${red}, ${green}, ${blue})`
    }
    else{
        return '#7c1805'
    }
}
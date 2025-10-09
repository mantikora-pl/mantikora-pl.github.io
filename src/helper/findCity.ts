import {cityData} from "./cityData";


/**
 * in KM
 * **/
export function getDistance(userLat:number,userLng:number,lat:number,lng:number):number{
    return Math.trunc(Math.sqrt(
        Math.pow(111*(lat-userLat),2)+
        Math.pow(111*(userLng-lng)*Math.cos(lat/57.3),2)
    ))
}

export function findClosestCity(lat:number,lng:number){
    let closestDistance=13000000
    let closestId=-1

    for (let i=0;i<cityData.length;i++){
        const obj=cityData[i]
        const distance=getDistance(lat,lng,obj.lat,obj.lng)
        //console.log(closestDistance)
        if(distance<closestDistance){
            closestDistance=distance
            closestId=i
        }
    }
    return cityData[closestId]
}

export function findCityByName(name:string){
    for (let i=0;i<cityData.length;i++){
        if(cityData[i].city===name){
            return cityData[i]
        }
    }
}

export function findCityByNameAndCountry(city:string,country:string){
    for (let i=0;i<cityData.length;i++){
        if(cityData[i].city===city&&cityData[i].country===country){
            return cityData[i]
        }
    }
    return {city:"",country:"",lat:0,lng:0}
}
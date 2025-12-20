import {cityData} from "../data/cityData"
import {defaultCountryLocation} from "../data/countryData";

/**
 * in KM
 * **/
export function getDistance(userLat: number, userLng: number, lat: number, lng: number): number {
    const earthRadius = 6371
    const deltaLat = (lat - userLat) * (Math.PI / 180)
    const deltaLng = (lng - userLng) * (Math.PI / 180)
    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
        Math.cos(userLat * (Math.PI / 180)) * Math.cos(lat * (Math.PI / 180)) *
        Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2)
    const centralAngle = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return Math.round(earthRadius * centralAngle)
}


/*export function findClosestCity(lat:number,lng:number){
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
}*/

/*export function findCityByName(name:string){
    for (let i=0;i<cityData.length;i++){
        if(cityData[i].city===name){
            return cityData[i]
        }
    }
}*/
export enum FoundEnum{
    FOUND_CITY=0,
    FOUND_COUNTRY=1,
    NOT_FOUND=2
}

interface CityInfo{
    country:string,
    city:string,
    lat:number,
    lng:number,
    found:FoundEnum
}
export function findCityByNameAndCountry(city:string,country:string,state?:string):CityInfo{
    for (let i=0;i<cityData.length;i++){
        if(
            cityData[i].city.toUpperCase()===city.toUpperCase() &&
            cityData[i].country.toUpperCase()===country.toUpperCase()
        ){
            return {country:cityData[i].country,city:cityData[i].city,lat:cityData[i].lat,lng:cityData[i].lng,found:FoundEnum.FOUND_CITY}
        }
    }

    for(let i=0;i<defaultCountryLocation.length;i++){
        if(defaultCountryLocation[i].country===country){
            return {country:defaultCountryLocation[i].country,city:"-",lat:defaultCountryLocation[i].lat,lng:defaultCountryLocation[i].lng,found:FoundEnum.FOUND_COUNTRY}
        }
    }
    return {country:"",city:"",lat:-1000,lng:-1000,found:FoundEnum.NOT_FOUND}
}
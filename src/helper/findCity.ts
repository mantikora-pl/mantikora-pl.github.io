import {cityData} from "../data/cityData";


/**
 * in KM
 * **/
export function getDistance(userLat: number, userLng: number, lat: number, lng: number): number {
    const earthRadius = 6371;
    const deltaLat = (lat - userLat) * (Math.PI / 180);
    const deltaLng = (lng - userLng) * (Math.PI / 180);
    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
        Math.cos(userLat * (Math.PI / 180)) * Math.cos(lat * (Math.PI / 180)) *
        Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
    const centralAngle = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(earthRadius * centralAngle);
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

export function findCityByNameAndCountry(city:string,country:string){
    for (let i=0;i<cityData.length;i++){
        if(
            cityData[i].city.toUpperCase()===city.toUpperCase() &&
            cityData[i].country.toUpperCase()===country.toUpperCase()
        ){
            return cityData[i]
        }
    }
    return {country:"",city:"",lat:-1,lng:-1}
}
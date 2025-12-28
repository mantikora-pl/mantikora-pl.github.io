import {findCityByNameAndCountry,FoundEnum,getDistance} from "../helper/findCity"

jest.mock("../data/cityData",()=>({
    cityData:[
        {city:"Los Angeles",state:"California",country:"USA",lat:34.0522,lng:-118.2437},
        {city:"New York",state:"New York",country:"USA",lat:40.7128,lng:-74.006},
        {city:"London",state:"England",country:"UK",lat:51.5074,lng:-0.1278},
    ]
}))

jest.mock("../data/countryData",()=>({
    defaultCountryLocation:[
        {country:"USA",lat:37.0902,lng:-95.7129},
        {country:"UK",lat:55.3781,lng:-3.436},
    ]
}))

describe("findCityByNameAndCountry",()=>{
    test("should return city information when a city exactly matches all fields",()=>{
        const result=findCityByNameAndCountry("Los Angeles","California","USA")
        expect(result).toEqual({
            city:"Los Angeles",
            state:"California",
            country:"USA",
            lat:34.0522,
            lng:-118.2437,
            found:FoundEnum.FOUND_CITY,
        })
    })

    test("should return country information when only the country matches",()=>{
        const result=findCityByNameAndCountry("NonExistentCity","NonExistentState","UK")
        expect(result).toEqual({
            city:"",
            state:"",
            country:"UK",
            lat:55.3781,
            lng:-3.436,
            found:FoundEnum.FOUND_COUNTRY,
        })
    })

    test("should return NOT_FOUND when no match is found",()=>{
        const result=findCityByNameAndCountry("NonExistentCity","NonExistentState","NonExistentCountry")
        expect(result).toEqual({
            city:"",
            state:"",
            country:"",
            lat:-1000,
            lng:-1000,
            found:FoundEnum.NOT_FOUND,
        })
    })

    test("should be case insensitive when matching city, state, and country",()=>{
        const result=findCityByNameAndCountry("london","ENGLAND","uk")
        expect(result).toEqual({
            city:"London",
            state:"England",
            country:"UK",
            lat:51.5074,
            lng:-0.1278,
            found:FoundEnum.FOUND_CITY,
        })
    })

    test("should return FOUND_COUNTRY when the state does not match and get country coordinates",()=>{
        const result=findCityByNameAndCountry("Los Angeles","WrongState","USA")
        expect(result).toEqual({
            city:"",
            state:"",
            country:"USA",
            lat:37.0902,
            lng:-95.7129,
            found:FoundEnum.FOUND_COUNTRY,
        })
    })
})

describe("getDistance",()=>{
    test("should return 0 when the coordinates are the same",()=>{
        const result=getDistance(40.7128,-74.0060,40.7128,-74.0060)
        expect(result).toBe(0)
    })

    test("should calculate distance between New York and Los Angeles",()=>{
        const result=getDistance(40.7128,-74.0060,34.0522,-118.2437)
        expect(result).toBeCloseTo(3940,-1)
    })

    test("should calculate distance between London and New York",()=>{
        const result=getDistance(51.5074,-0.1278,40.7128,-74.0060)
        expect(result).toBeCloseTo(5570,-1)
    })

    test("should calculate distance across the equator",()=>{
        const result=getDistance(-1.286389,36.817223,1.286389,36.817223)
        expect(result).toBeCloseTo(286,-1)
    })

    test("should handle coordinates that differ only in one value",()=>{
        const result=getDistance(51.5074,-0.1278,51.5074,-3.436)
        expect(result).toBeCloseTo(229,-1)
    })
})
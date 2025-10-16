import {findCityByNameAndCountry} from '../helper/findCity';

jest.mock('../data/cityData',()=>({
    cityData:[
        {country:'USA',city:'New York',lat:40.7128,lng:-74.006},
        {country:'UK',city:'London',lat:51.5074,lng:-0.1278},
        {country:'JP',city:'Tokyo',lat:35.6895,lng:139.6917},
        {country: "PL",city: "Gdansk",lat: 54.3475,lng: 18.6453},
    ],
}));

describe('findCityByNameAndCountry',()=>{
    it('returns the correct city object for a valid city and country',()=>{
        const result=findCityByNameAndCountry('Gdansk','PL');
        expect(result).toEqual({country:'PL',city:'Gdansk',lat:54.3475,lng:18.6453});
    });

    it('is case insensitive for city names and country codes',()=>{
        const result=findCityByNameAndCountry('london','uk');
        expect(result).toEqual({country:'UK',city:'London',lat:51.5074,lng:-0.1278});
    });

    it('returns a default object if the city is not found',()=>{
        const result=findCityByNameAndCountry('Paris','France');
        expect(result).toEqual({country:'',city:'',lat:-1,lng:-1});
    });

    it('returns a default object if the country does not match',()=>{
        const result=findCityByNameAndCountry('London','USA');
        expect(result).toEqual({country:'',city:'',lat:-1,lng:-1});
    });
});
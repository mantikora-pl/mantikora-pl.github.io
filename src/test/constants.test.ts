// constants.test.ts

import {codeToCountry} from '../helper/constants'

describe('codeToCountry',()=>{
    it('should return the correct country name for a valid 2-letter code',()=>{
        const COUNTRIES=[{code:'US',name:'United States'}]
        expect(codeToCountry('US')).toBe('United States')
    })

    it('should return the correct country name for a valid 2-letter code - Poland',()=>{
        const COUNTRIES=[{code:'PL',name:'Poland'}]
        expect(codeToCountry('PL')).toBe('Poland')
    })

    it('should be case insensitive when matching 2-letter codes',()=>{
        const COUNTRIES=[{code:'de',name:'Germany'}]
        expect(codeToCountry('DE')).toBe('Germany')
        expect(codeToCountry('de')).toBe('Germany')
    })

    it('should return undefined if no country matches the code',()=>{
        const COUNTRIES=[{code:'FR',name:'France'}]
        expect(codeToCountry('XX')).toBeUndefined()
    })

    it('should return undefined if the input is not a 2-letter code',()=>{
        const COUNTRIES=[{code:'IN',name:'India'}]
        expect(codeToCountry('IND')).toBeUndefined()
        expect(codeToCountry('')).toBeUndefined()
        expect(codeToCountry('A')).toBeUndefined()
    })
})
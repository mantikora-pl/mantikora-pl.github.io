import {getColor} from '../helper/getColor'

describe('getColor',()=>{
    it('should return "rgb(56,156,20)" for values less than the green threshold',()=>{
        expect(getColor(0)).toBe('rgb(56,156,20)')
        expect(getColor(39)).toBe('rgb(56,156,20)')
    })

    it('should return a calculated RGB value for values between green and yellow thresholds',()=>{
        expect(getColor(50)).toBe('rgb(67, 161, 20)')
        expect(getColor(120)).toBe('rgb(144, 198, 16)')
    })

    it('should return the yellow color "rgb(232,240,12)" for values equal to the yellow threshold',()=>{
        expect(getColor(200)).toBe('rgb(232,240,12)')
    })

    it('should return a calculated RGB value for values between yellow and red thresholds',()=>{
        expect(getColor(300)).toBe('rgb(226, 213, 11)')
        expect(getColor(600)).toBe('rgb(210, 134, 6)')
    })

    it('should return "rgb(187,27,0)" for values greater than or equal to the red threshold',()=>{
        expect(getColor(1000)).toBe('rgb(187,27,0)')
        expect(getColor(1200)).toBe('rgb(187,27,0)')
    })
})
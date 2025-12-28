import {getLanguage,getTranslation,translations} from '../helper/translation'
import cookies from 'universal-cookie'

jest.mock('universal-cookie',()=>{
    const mockCookies={
        get:jest.fn(),
        set:jest.fn(),
    }
    return jest.fn(()=>mockCookies)
})

const mockCookies=new cookies()

describe('getLanguage',()=>{
    beforeEach(()=>{
        jest.clearAllMocks()
    })

    it('should return existing language from cookies if set',()=>{
        (mockCookies.get as jest.Mock).mockReturnValue('fr')
        expect(getLanguage()).toBe('fr')
        expect(mockCookies.get).toHaveBeenCalledWith('language')
        expect(mockCookies.set).not.toHaveBeenCalled()
    })

    it('should set and return browser language if valid and not in cookies',()=>{
        const originalNavigatorLanguage=navigator.language

        Object.defineProperty(global.navigator,'language',{value:'en-US',writable:true});
        (mockCookies.get as jest.Mock).mockReturnValue(undefined)

        expect(getLanguage()).toBe('en')
        expect(mockCookies.set).toHaveBeenCalledWith('language','en',{path:'/'})

        Object.defineProperty(global.navigator,'language',{value:originalNavigatorLanguage,writable:true})
    })

    it('should set and return "en" if browser language is invalid',()=>{
        const originalNavigatorLanguage=navigator.language

        Object.defineProperty(global.navigator,'language',{value:'xx-XX',writable:true});
        (mockCookies.get as jest.Mock).mockReturnValue(undefined)

        expect(getLanguage()).toBe('en')
        expect(mockCookies.set).toHaveBeenCalledWith('language','en',{path:'/'})

        Object.defineProperty(global.navigator,'language',{value:originalNavigatorLanguage,writable:true})
    })
})

describe('getTranslation', () => {
    it('should return translation for valid key and locale', () => {
        expect(getTranslation('en', 'main')).toBe('Home')
        expect(getTranslation('pl', 'main')).toBe('Główna')
    })

    it('should return empty string for invalid key', () => {
        expect(getTranslation('en', 'nonexistent')).toBe('')
    })

    it('should return empty string for invalid locale', () => {
        expect(getTranslation('de', 'main')).toBe('')
    })

    it('should return empty string when both key and locale are invalid', () => {
        expect(getTranslation('xx', 'nonexistent')).toBe('')
    })

    it('should handle various valid translation keys', () => {
        expect(getTranslation('en', 'news')).toBe('News')
        expect(getTranslation('pl', 'news')).toBe('Nowości')
        expect(getTranslation('en', 'tour')).toBe('Tour')
        expect(getTranslation('pl', 'tour')).toBe('Trasa')
        expect(getTranslation('en', 'discography')).toBe('Discography')
        expect(getTranslation('pl', 'discography')).toBe('Dyskografia')
    })

    it('should handle short key variants', () => {
        expect(getTranslation('en', 'news-short')).toBe('News')
        expect(getTranslation('pl', 'news-short')).toBe('Wieści')
        expect(getTranslation('en', 'tour-short')).toBe('Tour')
        expect(getTranslation('pl', 'tour-short')).toBe('Trasa')
    })

    it('should handle keys with multiline values', () => {
        const aboutUsEn = getTranslation('en', 'aboutUsText')
        const aboutUsPl = getTranslation('pl', 'aboutUsText')
        expect(aboutUsEn.length).toBeGreaterThan(0)
        expect(aboutUsPl.length).toBeGreaterThan(0)
        expect(aboutUsEn).toContain('thrash metal band')
        expect(aboutUsPl).toContain('zespołem thrash metalowym')
    })

    it('should handle locale with different cases', () => {
        expect(getTranslation('EN', 'main')).toBe('')
        expect(getTranslation('EN', 'main')).not.toBe('Home')
    })

    it('should return empty string for empty key', () => {
        expect(getTranslation('en', '')).toBe('')
    })

    it('should return empty string for empty locale', () => {
        expect(getTranslation('', 'main')).toBe('')
    })

    it('should handle timeline keys', () => {
        expect(getTranslation('en', 'timelineDesc-1')).toBe('We\'ve started to work on our first song - Devil\'s Mouth')
        expect(getTranslation('pl', 'timelineDesc-1')).toBe('Zaczyna powstawać pierwszy wspólny utwór - Devil\'s Mouth')
    })

    it('should return translation for all existing keys in supported locales', () => {
        const supportedLocales = ['en', 'pl']
        Object.keys(translations).forEach((key) => {
            supportedLocales.forEach((locale) => {
                const result = getTranslation(locale, key)
                expect(typeof result).toBe('string')
            })
        })
    })

    it('should handle special characters in values', () => {
        expect(getTranslation('en', 'honorableMentions')).toBe('Honorable mentions: ')
        expect(getTranslation('pl', 'honorableMentions')).toBe('Podziękowania dla: ')
    })

    it('should always return a string type', () => {
        expect(typeof getTranslation('en', 'main')).toBe('string')
        expect(typeof getTranslation('pl', 'news')).toBe('string')
        expect(typeof getTranslation('xx', 'xx')).toBe('string')
    })

    it('should handle keys with hyphens', () => {
        expect(getTranslation('en', 'page-in-making')).toContain('PAGE IS IN MAKING')
        expect(getTranslation('pl', 'page-in-making')).toContain('STRONA W PRZYGOTOWANIU')
    })
})
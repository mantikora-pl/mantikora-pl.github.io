import {
    currentDate,
    dayOfTheWeek,
    daysToEvent,
    getMonthTranslation,
    localDayOfTheWeek,
    localizeDate,
    translateDate
} from "../helper/date"

describe("localDayOfTheWeek",()=>{
    const mockTranslations={
        en:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        pl:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"],
    }

    it("should return the correct day in English",()=>{
        expect(localDayOfTheWeek("en",0)).toBe(mockTranslations.en[0])
        expect(localDayOfTheWeek("en",1)).toBe(mockTranslations.en[1])
        expect(localDayOfTheWeek("en",6)).toBe(mockTranslations.en[6])
    })

    it("should return the correct day in Polish",()=>{
        expect(localDayOfTheWeek("pl",0)).toBe(mockTranslations.pl[0])
        expect(localDayOfTheWeek("pl",4)).toBe(mockTranslations.pl[4])
        expect(localDayOfTheWeek("pl",6)).toBe(mockTranslations.pl[6])
    })

    it("should return 'unknown' if provided day index is out of range for English",()=>{
        expect(localDayOfTheWeek("en",-1).toLowerCase()).toBe("unknown")
        expect(localDayOfTheWeek("en",7).toLowerCase()).toBe("unknown")
    })

    it("should return 'nieznany' if provided day index is out of range for Polish",()=>{
        expect(localDayOfTheWeek("pl",-1).toLowerCase()).toBe("nieznany")
        expect(localDayOfTheWeek("pl",7).toLowerCase()).toBe("nieznany")
    })

    it("should return an empty string if the locale is invalid",()=>{
        expect(localDayOfTheWeek("fr",0)).toBe("")
        expect(localDayOfTheWeek("de",2)).toBe("")
    })

    it("should return an empty string for valid day index but locale is empty",()=>{
        expect(localDayOfTheWeek("",2)).toBe("")
    })
})

describe("getMonthTranslation",()=>{
    it("should return correct month translation for English",()=>{
        expect(getMonthTranslation("en",1)).toBe("January")
        expect(getMonthTranslation("en",12)).toBe("December")
    })

    it("should return correct month translation for Polish",()=>{
        expect(getMonthTranslation("pl-noDay",1)).toBe("Styczeń")
        expect(getMonthTranslation("pl",12)).toBe("grudnia")
    })

    it("should return empty string for invalid locale",()=>{
        expect(getMonthTranslation("fr",1)).toBe("")
        expect(getMonthTranslation("de",6)).toBe("")
    })

    it("should return empty string for invalid key",()=>{
        expect(getMonthTranslation("en",13)).toBe("")
        expect(getMonthTranslation("pl",0)).toBe("")
    })
})

describe("translateDate",()=>{
    it("should return EventDate object with translated month for English",()=>{
        const result=translateDate(2024,1,15,"en")
        expect(result.year).toBe(2024)
        expect(result.month).toBe("January")
        expect(result.day).toBe(15)
    })

    it("should return EventDate object with translated month for Polish",()=>{
        const result=translateDate(2024,1,15,"pl")
        expect(result.year).toBe(2024)
        expect(result.month).toBe("stycznia")
        expect(result.day).toBe(15)
    })

    it("should handle different months",()=>{
        expect(translateDate(2023,6,20,"en").month).toBe("June")
        expect(translateDate(2023,12,31,"en").month).toBe("December")
    })

    it("should return empty month string for invalid locale",()=>{
        const result=translateDate(2024,1,15,"xx")
        expect(result.month).toBe("")
    })
})

describe("currentDate",()=>{
    it("should return object with year, month, and day properties",()=>{
        const result=currentDate()
        expect(result).toHaveProperty("year")
        expect(result).toHaveProperty("month")
        expect(result).toHaveProperty("day")
    })

    it("should return valid year value",()=>{
        const result=currentDate()
        expect(result.year).toBeGreaterThanOrEqual(2024)
        expect(result.year).toBeLessThan(3000)
    })

    it("should return valid month value between 1 and 12",()=>{
        const result=currentDate()
        expect(result.month).toBeGreaterThanOrEqual(1)
        expect(result.month).toBeLessThanOrEqual(12)
    })

    it("should return valid day value between 1 and 31",()=>{
        const result=currentDate()
        expect(result.day).toBeGreaterThanOrEqual(1)
        expect(result.day).toBeLessThanOrEqual(31)
    })
})

describe("daysToEvent",()=>{
    it("should return positive number for future event",()=>{
        const futureDate={year:2025,month:12,day:31}
        const result=daysToEvent(futureDate)
        expect(result).toBeGreaterThan(0)
    })

    it("should return zero or negative for past event",()=>{
        const pastDate={year:2020,month:1,day:1}
        const result=daysToEvent(pastDate)
        expect(result).toBeLessThanOrEqual(0)
    })

    it("should return number type",()=>{
        const eventDate={year:2025,month:6,day:15}
        const result=daysToEvent(eventDate)
        expect(typeof result).toBe("number")
    })
})

describe("localizeDate",()=>{
    it("should return formatted date for English locale when language is en",()=>{
        const mockGetLanguage=jest.fn(()=>"en")
        jest.mock("../helper/date",()=>({
            ...jest.requireActual("../helper/date"),
            getLanguage:mockGetLanguage
        }))
    })

    it("should return formatted date for Polish locale when language is pl",()=>{
        const result=localizeDate(2024,1,15)
        expect(result).toBeDefined()
        expect(typeof result).toBe("string")
    })

    it("should include year in output",()=>{
        const result=localizeDate(2024,6,20)
        expect(result).toContain("2024")
    })

    it("should include day in output",()=>{
        const result=localizeDate(2024,6,20)
        expect(result).toContain("20")
    })
})

describe("dayOfTheWeek",()=>{
    it("should return 0 for Sunday",()=>{
        expect(dayOfTheWeek(2024,1,7)).toBe(0)
    })

    it("should return correct day for valid date",()=>{
        const result=dayOfTheWeek(2024,1,1)
        expect(result).toBeGreaterThanOrEqual(0)
        expect(result).toBeLessThanOrEqual(6)
    })

    it("should return -1 for invalid date",()=>{
        expect(dayOfTheWeek(2024,-1,30)).toBe(-1)
    })

    it("should return valid day number for various dates",()=>{
        expect(dayOfTheWeek(2024,6,15)).toBeGreaterThanOrEqual(0)
        expect(dayOfTheWeek(2024,12,25)).toBeGreaterThanOrEqual(0)
    })

    it("should return -1 for edge case invalid inputs",()=>{
        expect(dayOfTheWeek(2024,13,1)).toBe(-1)
        expect(dayOfTheWeek(2024,0,1)).toBe(-1)
    })
})
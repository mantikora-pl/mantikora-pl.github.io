import {shouldBeVisible} from "../helper/concertRaw"
import {daysToEvent,translateDate} from "../helper/date"
import {getLanguage} from "../helper/translation";

jest.mock("../helper/date",()=>({
    daysToEvent:jest.fn(),
    translateDate:jest.fn((year,month,day,lang)=>({year,month,day}))
}))

describe("shouldBeVisible",()=>{
    it("returns true when event is visible and the event date is today or in the future",()=>{
        (daysToEvent as jest.Mock).mockReturnValue(0)
        const concert={
            id:1,
            date:translateDate(2025,12,28,getLanguage()),
            numericDate:{year:2025,month:12,day:28},
            name:"Rock Festival",
            country:"USA",
            state:"CA",
            city:"Los Angeles",
            buyLink:"https://example.com",
            visible:true,
        }

        expect(shouldBeVisible(concert)).toBe(true)
    })

    it("returns false when event is marked as not visible, regardless of the event date",()=>{
        (daysToEvent as jest.Mock).mockReturnValue(5)
        const concert={
            id:2,
            date:translateDate(2026,1,10,getLanguage()),
            numericDate:{year:2026,month:1,day:10},
            name:"Pop Concert",
            country:"UK",
            state:"London",
            city:"London",
            buyLink:"https://example.com",
            visible:false,
        }

        expect(shouldBeVisible(concert)).toBe(false)
    })

    it("returns false when event date is in the past, even if visible is true",()=>{
        (daysToEvent as jest.Mock).mockReturnValue(-1)
        const concert={
            id:3,
            date:translateDate(2025,12,25,getLanguage()),
            numericDate:{year:2025,month:12,day:25},
            name:"Christmas Event",
            country:"Canada",
            state:"ON",
            city:"Toronto",
            buyLink:"https://example.com",
            visible:true,
        }

        expect(shouldBeVisible(concert)).toBe(false)
    })

    it("returns true when event is visible and there are days remaining to the event",()=>{
        (daysToEvent as jest.Mock).mockReturnValue(10)
        const concert={
            id:4,
            date:translateDate(2026,1,10,getLanguage()),
            numericDate:{year:2026,month:1,day:10},
            name:"Jazz Night",
            country:"France",
            state:"Paris",
            city:"Paris",
            buyLink:"https://example.com",
            visible:true,
        }

        expect(shouldBeVisible(concert)).toBe(true)
    })
})
import {CoordinateFetcher} from "../helper/CoordinateFetcher"

describe("CoordinateFetcher",()=>{
    let mockSetCoordinates:jest.Mock
    let mockGpsLocation:{current:boolean}

    beforeEach(()=>{
        mockSetCoordinates=jest.fn()
        mockGpsLocation={current:false}
        CoordinateFetcher.fetchInProgress=false
        jest.clearAllMocks()
    })

    it("should fetch coordinates using geolocation and set them",async()=>{
        const mockPosition={
            coords:{latitude:51.1,longitude:17.03},
        }

        const mockGeolocation={
            getCurrentPosition:jest.fn((success)=>success(mockPosition)),
        }

        Object.defineProperty(global.navigator,'geolocation',{value:mockGeolocation,writable:true})

        const promise=CoordinateFetcher.getInstance().getCoordinates(
            mockSetCoordinates,
            mockGpsLocation
        )

        await new Promise(resolve=>setTimeout(resolve,10))
        await promise

        expect(mockSetCoordinates).toHaveBeenCalledWith({
            lat:51.1,
            lng:17.03,
        })
        expect(CoordinateFetcher.fetchInProgress).toBe(false)
    })

    it("should fall back to IP location and set coordinates if geolocation fails",async()=>{
        const mockGeolocation={
            getCurrentPosition:jest.fn((_,error)=>error()),
        }

        Object.defineProperty(global.navigator,'geolocation',{value:mockGeolocation,writable:true})

        global.fetch=jest.fn(()=>
            Promise.resolve({
                json:()=>Promise.resolve({latitude:40.712776,longitude:-74.005974}),
            })
        ) as jest.Mock

        const promise=CoordinateFetcher.getInstance().getCoordinates(
            mockSetCoordinates,
            mockGpsLocation
        )

        await new Promise(resolve=>setTimeout(resolve,10))
        await promise

        expect(mockSetCoordinates).toHaveBeenCalledWith({
            lat:40.712776,
            lng:-74.005974,
        })
        expect(CoordinateFetcher.fetchInProgress).toBe(false)
    })

    it("should not fetch coordinates if fetch is already in progress",async()=>{
        CoordinateFetcher.fetchInProgress=true

        await CoordinateFetcher.getInstance().getCoordinates(
            mockSetCoordinates,
            mockGpsLocation
        )

        expect(mockSetCoordinates).not.toHaveBeenCalled()
    })

    it("should not fetch coordinates if gpsLocation.current is true",async()=>{
        mockGpsLocation.current=true

        await CoordinateFetcher.getInstance().getCoordinates(
            mockSetCoordinates,
            mockGpsLocation
        )

        expect(mockSetCoordinates).not.toHaveBeenCalled()
    })

    it("should fetch IP coordinates if geolocation is not available",async()=>{
        Object.defineProperty(global.navigator,'geolocation',{value:undefined,writable:true})

        global.fetch=jest.fn(()=>
            Promise.resolve({
                json:()=>Promise.resolve({latitude:34.0522,longitude:-118.2437}),
            })
        ) as jest.Mock

        const promise=CoordinateFetcher.getInstance().getCoordinates(
            mockSetCoordinates,
            mockGpsLocation
        )

        await new Promise(resolve=>setTimeout(resolve,10))
        await promise

        expect(mockSetCoordinates).toHaveBeenCalledWith({
            lat:34.0522,
            lng:-118.2437,
        })
        expect(CoordinateFetcher.fetchInProgress).toBe(false)
    })
})
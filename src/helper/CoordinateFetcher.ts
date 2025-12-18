export class CoordinateFetcher{

    static instance:CoordinateFetcher
    static fetchInProgress=false

    static getInstance():CoordinateFetcher{
        if(!CoordinateFetcher.instance){
            CoordinateFetcher.instance=new CoordinateFetcher()
        }
        return CoordinateFetcher.instance
    }

    async getCoordinates(setCoordinates:(arg:{lat:number,lng:number})=>void,gpsLocation:{
        current:boolean
    }):Promise<void>{
        if(CoordinateFetcher.fetchInProgress||gpsLocation.current) return

        CoordinateFetcher.fetchInProgress=true
        gpsLocation.current=true

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position:any)=>{
                    setCoordinates({lat:position.coords.latitude,lng:position.coords.longitude})
                    CoordinateFetcher.fetchInProgress=false
                },
                ()=>{
                    fetch('https://api.ipgeolocation.io/ipgeo?apiKey=d5d077db91f04f3f8ad5bce31d1efd50')
                        .then((r)=>r.json())
                        .then((data)=>setCoordinates({lat:data.latitude,lng:data.longitude}))
                        .finally(()=>CoordinateFetcher.fetchInProgress=false)
                }
            )
        }
        else {
            fetch('https://api.ipgeolocation.io/ipgeo?apiKey=d5d077db91f04f3f8ad5bce31d1efd50')
                .then((response)=>response.json())
                .then((data)=>setCoordinates({lat:data.latitude,lng:data.longitude}))
                .finally(()=>CoordinateFetcher.fetchInProgress=false)
        }
    }
}

export async function getCoordinates(setCoordinates:(arg0:{lat:number,lng:number})=>void,gpsLocation:{
    current:boolean
}):Promise<void>{
    await CoordinateFetcher.getInstance().getCoordinates(setCoordinates,gpsLocation)
}


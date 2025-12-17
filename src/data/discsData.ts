import {Disc} from "../components/DiscList";
import {getLanguage,getTranslation} from "../helper/translation";

export const single=" ("+getTranslation(getLanguage(),"single")+")"


export const discsData:Disc[]=[
    {
        title:"M.I.N.D",
        date:"XX.XX.2026",
        coverArtSrc:"https://picsum.photos/500?random=100",
        songs:[
            "Devil's Mouth"+single,
            "Davy Jones's Locker",
            "Vanitas"+single,
            "MIND"+single,
            "TBA",
            "TBA",
            "TBA",
            "TBA",
            "TBA"
        ],
        credits:getTranslation(getLanguage(),"writtenByEveryone")
    },
    {
        title:"Devil's Mouth - demo",
        date:"XX.12.2025",
        coverArtSrc:"https://picsum.photos/500?random=200",
        songs:[
            "Devil's Mouth",
            "Vanitas",
            "Davy Jones's Locker",
            "MIND",
        ],
        credits:getTranslation(getLanguage(),"writtenByEveryone")
    }
]

export const discsData1:Disc[]=[
    {
        title: "Future Nostalgia",
        date: "15.12.2025",
        coverArtSrc: "https://picsum.photos/500?random=1",
        songs: [
            "Don't Start Now",
            "Levitating",
            "Physical",
            "Break My Heart",
            "Pretty Please"
        ],
        credits: "Dua Lipa"
    },
    {
        title: "Evermore",
        date: "15.12.2025",
        coverArtSrc: "https://picsum.photos/500?random=2",
        songs: [
            "Willow",
            "Champagne Problems",
            "Gold Rush",
            "Tis the Damn Season",
            "Evermore"
        ],
        credits: "Taylor Swift"
    },
    {
        title: "Sour",
        date: "15.12.2025",
        coverArtSrc: "https://picsum.photos/500?random=3",
        songs: [
            "Brutal",
            "Drivers License",
            "Good 4 U",
            "Deja Vu",
            "Traitor"
        ],
        credits: "Olivia Rodrigo"
    },
    {
        title: "Planet Her",
        date: "15.12.2025",
        coverArtSrc: "https://picsum.photos/500?random=4",
        songs: [
            "Kiss Me More",
            "Woman",
            "Need to Know",
            "I Don't Do Drugs",
            "You Right"
        ],
        credits: "Doja Cat"
    },
    {
        title: "Believe",
        date: "15.12.2025",
        coverArtSrc: "https://picsum.photos/500?random=5",
        songs: [
            "Believe",
            "Strong Enough",
            "Dove's Cry",
            "All or Nothing",
            "What About the Heart"
        ],
        credits: "Cher"
    },
    {
        title: "After Hours",
        date: "15.12.2025",
        coverArtSrc: "https://picsum.photos/500?random=6",
        songs: [
            "Blinding Lights",
            "Save Your Tears",
            "Heartless",
            "In Your Eyes",
            "Too Late"
        ],
        credits: "The Weeknd"
    },
    {
        title: "25",
        date: "15.12.2025",
        coverArtSrc: "https://picsum.photos/500?random=7",
        songs: [
            "Hello",
            "Send My Love",
            "I Miss You",
            "When We Were Young"
        ],
        credits: "Adele"
    },
    {
        title: "Golden Hour",
        date: "15.12.2025",
        coverArtSrc: "https://picsum.photos/500?random=8",
        songs: [
            "Better Together",
            "Gold Rush Kid",
            "One Last Time",
            "Can't Help Myself"
        ],
        credits: "Kacey Musgraves"
    },
    {
        title: "Happier Than Ever",
        date: "15.12.2025",
        coverArtSrc: "https://picsum.photos/500?random=9",
        songs: [
            "Getting Older",
            "I Didn't Change My Number",
            "Billie Bossa Nova",
            "NDA",
            "Happier Than Ever"
        ],
        credits: "Billie Eilish"
    },
    {
        title: "Fearless (Taylor's Version)",
        date: "15.12.2025",
        coverArtSrc: "https://picsum.photos/500?random=10",
        songs: [
            "Love Story",
            "You Belong With Me",
            "Fifteen",
            "Breathe",
            "Tell Me Why"
        ],
        credits: "Taylor Swift"
    }
]

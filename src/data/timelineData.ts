import {TimelineElement} from "../components/Timeline";
import {getLanguage,getTranslation} from "../helper/translation";

export const timeLineItems:TimelineElement[]=[
    {
        id:5,
        year:2026,
        subtitle:getTranslation(getLanguage(),"timelineSubTitle-5"),
        description:getTranslation(getLanguage(),"timelineDesc-5"),
        photo:""
    },
    /*   {
           id:4,
           date:"2025 August",
           subtitle:getTranslation(getLanguage(),"timelineSubTitle-4"),
           description:getTranslation(getLanguage(),"timelineDesc-4"),
           photo:""
       },*/
    {
        id:3,
        year:2025,
        month:6,
        day:10,
        subtitle:getTranslation(getLanguage(),"timelineSubTitle-3"),
        description:getTranslation(getLanguage(),"timelineDesc-3"),
        photo:""
    },
    {
        id:2,
        year:2025,
        month:6,
        subtitle:getTranslation(getLanguage(),"timelineSubTitle-2"),
        description:getTranslation(getLanguage(),"timelineDesc-2"),
        photo:"mantikoraLogoGradient.png"
    },
    {
        id:1,
        year:2025,
        month:4,
        day:17, //todo: check
        subtitle:getTranslation(getLanguage(),"timelineSubTitle-1"),
        description:getTranslation(getLanguage(),"timelineDesc-1"),
        photo:""
    }
]
export const timeLineItems1: TimelineElement[] = [
    { id: 1, year: 2026, month: 1, day: 1, subtitle: "New Year Celebration", description: "Global celebrations for the New Year, welcoming 2026.", photo: "https://picsum.photos/300?random=1" },
    { id: 2, year: 2026, month: 4, subtitle: "Earth Day", description: "Community clean-up events held worldwide.", photo: "https://picsum.photos/300?random=2" },
    { id: 3, year: 2026, month: 5, day: 23, subtitle: "Tech Expo", description: "Latest technologies showcased at the annual Tech Expo.", photo: "https://picsum.photos/300?random=3" },
    { id: 4, year: 2026, month: 6, subtitle: "Global Health Summit", description: "World leaders gather to discuss health initiatives.", photo: "https://picsum.photos/300?random=4" },
    { id: 5, year: 2026, month: 7, day: 15, subtitle: "Mars Mission Launched", description: "Successful launch of the latest Mars exploration mission.", photo: "https://picsum.photos/300?random=5" },
    { id: 6, year: 2026, month: 8, subtitle: "Cultural Festival", description: "Cities around the world celebrate cultural diversity.", photo: "https://picsum.photos/300?random=6" },
    { id: 7, year: 2026, month: 9, day: 30, subtitle: "Global Trade Agreement", description: "New trade agreements signed between countries.", photo: "https://picsum.photos/300?random=7" },
    { id: 8, year: 2026, month: 10, subtitle: "AI Conference", description: "Technologists discuss advancements in artificial intelligence.", photo: "https://picsum.photos/300?random=8" },
    { id: 9, year: 2026, month: 11, day: 11, subtitle: "Veterans Day", description: "Commemorating the sacrifices of veterans worldwide.", photo: "https://picsum.photos/300?random=9" },
    { id: 10, year: 2026, month: 12, subtitle: "Winter Solstice", description: "Celebrations of the Winter Solstice in various cultures.", photo: "https://picsum.photos/300?random=10" },
    { id: 11, year: 2027, month: 1, day: 20, subtitle: "International Day of Happiness", description: "Promoting happiness and well-being globally.", photo: "https://picsum.photos/300?random=11" },
    { id: 12, year: 2027, month: 2, day: 14, subtitle: "Valentine's Day", description: "Celebrating love and friendship around the world.", photo: "https://picsum.photos/300?random=12" },
    { id: 13, year: 2027, month: 3, subtitle: "World Water Day", description: "Raise awareness about the importance of freshwater.", photo: "https://picsum.photos/300?random=13" },
    { id: 14, year: 2027, month: 4, day: 22, subtitle: "Earth Day", description: "Global initiatives focused on protecting the planet.", photo: "https://picsum.photos/300?random=14" },
    { id: 15, year: 2027, month: 5, subtitle: "Innovation Summit", description: "Industry leaders come together to discuss innovations.", photo: "https://picsum.photos/300?random=15" },
    { id: 16, year: 2027, month: 6, day: 1, subtitle: "World Environment Day", description: "Celebrating environmental protection efforts worldwide.", photo: "https://picsum.photos/300?random=16" },
    { id: 17, year: 2027, month: 7, subtitle: "Global Peace Day", description: "Initiatives aimed at fostering global peace.", photo: "https://picsum.photos/300?random=17" },
    { id: 18, year: 2027, month: 8, day: 19, subtitle: "World Humanitarian Day", description: "Honoring humanitarian workers and their impact.", photo: "https://picsum.photos/300?random=18" },{ id: 19, year: 2026, subtitle: "Scientific Discovery", description: "Researchers discover a new planet in a nearby galaxy.", photo: "" },
    { id: 19, year: 2027, month: 9, day: 30, subtitle: "Tech Innovation Launch", description: "The debut of significant new technology products.", photo: "https://picsum.photos/300?random=19" },
    { id: 20, year: 2027, month: 10, subtitle: "Healthcare Advances", description: "New healthcare technologies improve patient care.", photo: "https://picsum.photos/300?random=20" },
    { id: 21, year: 2027, month: 11, day: 11, subtitle: "Remembrance Day", description: "Honoring those who served in the armed forces.", photo: "https://picsum.photos/300?random=21" },
    { id: 22, year: 2027, month: 12, subtitle: "Holiday Celebrations", description: "Festivities celebrating the winter holiday season.", photo: "https://picsum.photos/300?random=22" },
    { id: 23, year: 2028, month: 1, day: 1, subtitle: "New Year's Day", description: "Welcoming the new year with hope and resolutions.", photo: "https://picsum.photos/300?random=23" },
    { id: 24, year: 2028, month: 2, subtitle: "Winter Sports", description: "Winter sports championships showcasing top athletes.", photo: "https://picsum.photos/300?random=24" },
    { id: 25, year: 2028, month: 3, day: 20, subtitle: "Spring Equinox", description: "Celebrating the arrival of spring with various festivals.", photo: "https://picsum.photos/300?random=25" },
    { id: 26, year: 2028, month: 4, day: 22, subtitle: "Earth Day", description: "Recognizing the importance of environmental conservation.", photo: "https://picsum.photos/300?random=26" },
    { id: 27, year: 2028, month: 5, subtitle: "Tech Conference", description: "Leading tech minds gather to discuss future innovations.", photo: "https://picsum.photos/300?random=27" },
    { id: 28, year: 2028, month: 6, day: 1, subtitle: "Global Health Awareness", description: "Promoting global health initiatives and awareness.", photo: "https://picsum.photos/300?random=28" },
    { id: 29, year: 2028, month: 7, subtitle: "Summer Olympics", description: "The Olympics held in Tokyo, showcasing global athletic talent.", photo: "https://picsum.photos/300?random=29" },
    { id: 30, year: 2028, month: 8, day: 15, subtitle: "International Youth Day", description: "Celebrating the contributions of youth around the world.", photo: "https://picsum.photos/300?random=30" },
    { id: 31, year: 2028, month: 9, subtitle: "World Peace Day", description: "Promoting peace initiatives and conflict resolution strategies.", photo: "https://picsum.photos/300?random=31" },
    { id: 32, year: 2028, month: 10, day: 31, subtitle: "Halloween Celebrations", description: "Communities celebrate with costumes and festivities.", photo: "https://picsum.photos/300?random=32" },
    { id: 33, year: 2028, month: 11, subtitle: "Thanksgiving", description: "Gathering to give thanks and celebrate family and friends.", photo: "https://picsum.photos/300?random=33" },
    { id: 34, year: 2028, month: 12, day: 25, subtitle: "Christmas Day", description: "Christmas celebrated worldwide with joy and festivities.", photo: "https://picsum.photos/300?random=34" },
    { id: 35, year: 2029, month: 1, day: 1, subtitle: "New Year's Celebration", description: "Festivities to welcome the New Year with hope.", photo: "https://picsum.photos/300?random=35" },
    { id: 36, year: 2029, month: 2, subtitle: "Winter Carnival", description: "Communities celebrate winter with parades and activities.", photo: "https://picsum.photos/300?random=36" },
]


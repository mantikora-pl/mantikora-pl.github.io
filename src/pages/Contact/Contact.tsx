import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ContactEntity,{Socials} from "../../components/ContactEntity";
import NewLineToBr from "../../components/NewLineToBr";


const items:Socials[]=[
    {entityName: "Band",
        mainImage: "/mantikoraLogo.png",
        items1:[
            {icon:"/socials/youtube.png",link:" https://www.youtube.com/@Mantikora-band",name:"youtube"},
            {icon:"./socials/instagram.png",link:"https://www.instagram.com/mantikora_band/",name:"instagram"},
            {icon:"./socials/facebook.png",link:"https://www.facebook.com/profile.php?id=61575692071735",name:"Facebook"},
            {icon:"/socials/twitter.png",link:"https://x.com/mantikora_band",name:"X (twitter)"},
            {icon:"/socials/tiktok.png",link:"https://www.tiktok.com/@mantikora_band",name:"Tik Tok"},
            {icon:"/socials/bandcamp.png",link:" https://mantikora1.bandcamp.com/",name:"Bandcamp"},
            {icon:"/socials/email.png",link:"mailto:mantikoraband@gmail.com",name:"E-mail"},
        ]},
    {entityName: "Filip",
        mainImage: "/socials/JesusChad.png",
        items1:[
            {icon:"/socials/youtube.png",link:" https://www.youtube.com/404",name:"youtube"},
            {icon:"./socials/instagram.png",link:"https://www.instagram.com/404/",name:"instagram"},
            {icon:"./socials/facebook.png",link:"https://www.facebook.com",name:"Facebook"},
            {icon:"/socials/twitter.png",link:"https://x.com/404",name:"X (twitter)"},
            {icon:"/socials/tiktok.png",link:"https://www.tiktok.com/404",name:"Tik Tok"},
        ]},
    {entityName: "Aleks",
        mainImage: "/socials/Stroomer.png",
        items1:[
            {icon:"/socials/youtube.png",link:" https://www.youtube.com/404",name:"youtube"},
            {icon:"./socials/instagram.png",link:"https://www.instagram.com/404/",name:"instagram"},
            {icon:"./socials/facebook.png",link:"https://www.facebook.com",name:"Facebook"},
            {icon:"/socials/twitter.png",link:"https://x.com/404",name:"X (twitter)"},
            {icon:"/socials/tiktok.png",link:"https://www.tiktok.com/404",name:"Tik Tok"},
        ]},
    {entityName: "Oskar",
        mainImage: "/socials/JapaneseSoldier.png",
        items1:[
            {icon:"/socials/youtube.png",link:" https://www.youtube.com/404",name:"youtube"},
            {icon:"./socials/instagram.png",link:"https://www.instagram.com/404/",name:"instagram"},
            {icon:"./socials/facebook.png",link:"https://www.facebook.com",name:"Facebook"},
            {icon:"/socials/twitter.png",link:"https://x.com/404",name:"X (twitter)"},
            {icon:"/socials/tiktok.png",link:"https://www.tiktok.com/404",name:"Tik Tok"},
        ]},
    {entityName: "Rafał",
        mainImage: "/socials/MonsterBoomer.png",
        items1:[
            {icon:"/socials/youtube.png",link:" https://www.youtube.com/404",name:"youtube"},
            {icon:"./socials/instagram.png",link:"https://www.instagram.com/404/",name:"instagram"},
            {icon:"./socials/facebook.png",link:"https://www.facebook.com",name:"Facebook"},
            {icon:"/socials/twitter.png",link:"https://x.com/404",name:"X (twitter)"},
            {icon:"/socials/tiktok.png",link:"https://www.tiktok.com/404",name:"Tik Tok"},
        ]},

    {entityName: "Wokalista którego nie ma",
        mainImage: "/socials/HappyNordicChad.png",
        items1:[
            {icon:"/socials/youtube.png",link:" https://www.youtube.com/404",name:"youtube"},
            {icon:"./socials/instagram.png",link:"https://www.instagram.com/404/",name:"instagram"},
            {icon:"./socials/facebook.png",link:"https://www.facebook.com",name:"Facebook"},
            {icon:"/socials/twitter.png",link:"https://x.com/404",name:"X (twitter)"},
            {icon:"/socials/tiktok.png",link:"https://www.tiktok.com/404",name:"Tik Tok"},
        ]},
]
const lorem:string="Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada penatibus turpis vulputate,\n ultrices donec eu interdum pharetra nostra proin pulvinar ac risus tempor viverra,\n blandit elementum purus est iaculis non tortor lobortis scelerisque curabitur.\n Proin mollis sapien primis accumsan phasellus sollicitudin sagittis magnis,\n quam gravida luctus ut scelerisque cubilia imperdiet facilisis risus."

export default function Contact(){
    return <>
        <Header/>
        <Navbar/>
        <p id={"contactSubHeader"}><NewLineToBr>{lorem}</NewLineToBr></p>
        <div id={"socialEntitiesWrapperWrapper"}>
            <section id={"socialEntitiesWrapper"}>
            {items.map((item,id)=>(
                <ContactEntity items={item} key={id}/>
            ))}
            </section>
        </div>
    </>
}

/*




 */
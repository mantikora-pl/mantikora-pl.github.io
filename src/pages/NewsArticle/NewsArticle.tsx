import {useParams} from "react-router-dom";
import {getNewsDataById} from "../../data/newsData";
import {localizeDate} from "../../helper/date";
import {Link} from "react-router-dom";
import ShareIcon from '@mui/icons-material/Share';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function NewsArticle(){
    const {id}=useParams();
    if(!id) return null;
    const newsData=getNewsDataById(parseInt(id));
    return <div className={"innerPage skullBackground"}>
        <div className={"articlePage"}>
            <div className={"articleTopPhotoContainer"}>
                <img src={newsData.photoSrc} alt={newsData.title} className={"articleTopPhoto"} onLoad={
                    ()=>document.getElementById("top")?.scrollIntoView()
                }/>
            </div>
            <div className={"articleTitle"}>{newsData.title}</div>
            <div className={"articleDate"}>{localizeDate(newsData.year,newsData.month,newsData.day)}</div>
            <button onClick={async()=>{
                try{
                    await navigator.share({
                        title:`${newsData.title}`,
                        url:`https://mantikora-pl.github.io/#/article/${id}`,
                    });
                }
                catch{}
            }}
                    className={"articleButton"}>
                <p> Share</p>
                <ShareIcon/>
            </button>
            <div className={"articleContent"}>{newsData.content}</div>
            <div className={"articlePhotoContainer"}>
                <img src={newsData.photoSrc} alt={newsData.title} className={"articlePhoto"}/>
            </div>
            <div className={"articleBackLinkContainer"}>
                <Link to={"/news"} className={"articleBackLink"}>
                    <KeyboardBackspaceIcon/><p> Back</p>
                </Link>
            </div>
        </div>
    </div>
}
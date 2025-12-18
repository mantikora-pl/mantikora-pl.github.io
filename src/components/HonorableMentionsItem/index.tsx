import React from 'react'
import './style.css'

export interface HonorableMentionsItemI{
    name:string,
    link?:string,
    linkIcon?:string,
    description?:string
}

function HonorableMentionsItem({item}:{item:HonorableMentionsItemI}){
    return (
        <div className={"entityContainer"}>
            <div className={"nameLinkWrapper"}>
                <p className={"name"}>{item.name}</p>
                {(item.link&&item.linkIcon)&&
                    <a href={item.link} className={"link"}>
                        <img src={item.linkIcon} alt={"click to go to "+item.link}/>
                    </a>
                }
            </div>
            {item.description&&<p className={"description"}>{item.description}</p>}
        </div>

    )
}

export default HonorableMentionsItem


import React from 'react'
import './style.css'

export interface HonorableMentionsItemI{
    name:string,
    link?:string,
    linkIcon?:string,
    description?:string
}

function HonorableMentionsItem({item}:{item: HonorableMentionsItemI}){
    return(
        <div>
            <div className={"honorableMentionsItemWrapper"}>
                <p className={"entityName"}>{item.name}</p>
                {(item.link && item.linkIcon) &&
                        <a href={item.link} className={"entityLink"}>
                            <img src={item.linkIcon} alt={"click to go to "+item.link}/>
                        </a>
                }
                {item.description && <p className={"entityDescription"}>{item.description}</p>}
            </div>
        </div>
    )
}

export default HonorableMentionsItem


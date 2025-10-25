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
            <h4>{item.name}</h4>
            {(item.link && item.linkIcon) &&
                <a href={item.link}><img src={item.linkIcon} alt={"click to go to "+item.link}/></a>
            }
        </div>
    )
}

export default HonorableMentionsItem


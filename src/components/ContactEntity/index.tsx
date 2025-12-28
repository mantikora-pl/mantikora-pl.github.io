import React from 'react'
import './style.css'

export interface Socials{
    entityName:string
    mainImage:string
    innerItems:{
        icon:string,
        link:string,
        name:string
    }[],
    subpageLink?:string
}

function ContactEntity({items}:{items:Socials}){
    /*function handleClick(link:string){
       window.location.href=link
    }
    const link=items.subpageLink
    const link="#/about/filip"*/

    return (
        <div className={"socialsWrapper"} /*onClick={()=>handleClick(link)}*/>
            {<p>{items.entityName}</p>}
            <img src={items.mainImage} alt={items.entityName} className={"mainImg"}/>
            <div className={"socialsList"}>
                {items.innerItems.map((item,id)=>(
                    <a key={id} href={item.link} className={"socialsLink"}>
                        <img src={item.icon} alt={item.name}/>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default ContactEntity
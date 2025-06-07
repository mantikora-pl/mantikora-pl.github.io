import React from 'react'
import './style.css'

export interface Socials{
    entityName:string
    mainImage:string
    items1:{
        icon:string,
        link:string,
        name:string
    }[]
}

function ContactEntity({items}:{items: Socials}){
    return(
        <div className={"socialsWrapper"}>
          {/*  <p>{items.entityName}</p>*/}
            <img src={items.mainImage} alt={items.entityName} className={"mainImg"}/>
            <div className={"socialsList"}>
                {items.items1.map((item,id)=>(
                    <a key={id} href={item.link} className={"socialsLink"}>
                        <img src={item.icon} alt={item.name}/>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default ContactEntity
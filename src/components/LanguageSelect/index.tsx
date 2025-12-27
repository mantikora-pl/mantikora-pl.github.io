import {cookies,getLanguage,languagesData} from "../../helper/translation";
import React from "react";
import './style.css'

export function handleLanguageChange(event:React.ChangeEvent<HTMLSelectElement>){
    cookies.set("language",event.target.value)
    window.location.reload()
}
export function LanguageSelect({minimize=true}:{minimize?:boolean}) {
    return (
        <select
            id={"languageSelectSide"}
            name={"language"}
            value={getLanguage()}
            onChange={handleLanguageChange}
            className={minimize?"minimizeOnScroll":""}>
            {languagesData.map((lang,id)=>(
                <option key={id} value={lang.code}>{lang.icon} {lang.code}</option>
            ))}
        </select>
    )
}
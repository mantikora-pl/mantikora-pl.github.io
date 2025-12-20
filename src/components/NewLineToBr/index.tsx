import React from 'react'

export default function NewLineToBr({children=""}){
    return <>
        {children.split('\n').flatMap((line,id,all)=>
            id<all.length-1?[
                line,
                <br key={id}/>
            ]:line)
        }
    </>
}
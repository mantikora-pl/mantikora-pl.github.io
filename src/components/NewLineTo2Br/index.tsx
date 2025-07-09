import React from 'react'

export default function NewLineTo2Br({children=""}){
    return <>
        {children.split('\n').flatMap((line,id,all)=>
            id<all.length-1?[
                line,
                <><br key={id}/><br/></>
            ]:line)
        }
    </>
}
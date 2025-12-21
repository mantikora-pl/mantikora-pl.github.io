import React from 'react'

export default function NewLineToBr({children}:{children:React.ReactNode}){
    if(typeof children!=='string') return <>children</>
    return <>
        {children.split('\n').flatMap((line,id,all)=>
            id<all.length-1?[
                line,
                <br key={id}/>
            ]:line)
        }
    </>
}
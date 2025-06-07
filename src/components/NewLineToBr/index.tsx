import React from 'react'

export default function NewLineToBr({children=""}){
    return <>
        {children.split('\n').flatMap((line,id)=>[
                line,
            <br key={id}/>
            ])
        }
    </>;
}
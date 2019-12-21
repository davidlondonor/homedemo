import React from 'react'

export const Logo = (props) => {
    return (
        <img 
            src={props.src}
            alt='' 
            height={props.size}
        />
    )
}
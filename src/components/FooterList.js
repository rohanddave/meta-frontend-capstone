import React from 'react'

function FooterList({ children, heading }) {
    return (
        <>
            <h5 className='text-md-start'>{heading}</h5>
            <ul className='list-unstyled text-md-start'>
                {children.map(child => <li>{child}</li>)}
            </ul>
        </>
    )
}

export default FooterList
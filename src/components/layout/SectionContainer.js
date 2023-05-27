import React from 'react'

function SectionContainer({ children }) {
    return (
        <section className="container w-75">
            <div className='section container-fluid p-5'>
                {children}
            </div>
        </section>

    )
}

export default SectionContainer
import React from 'react'
import SectionContainer from './SectionContainer'

function StorySection() {
    return (
        <SectionContainer>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 text-md-start'>
                        <h1>Little Lemon</h1>
                        <h5>Chicago</h5>
                        <p className='mt-md-5 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin pulvinar mattis. Fusce hendrerit lorem accumsan nunc laoreet fermentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin pulvinar mattis. Fusce hendrerit lorem accumsan nunc laoreet fermentum.</p>
                    </div>

                    <div className='col-md-6' style={{ position: 'relative' }}>
                        <img src="https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png" alt='story' className='img-fluid d-none d-md-block' style={{ position: 'absolute', top: 50, left: 100 }} />

                        <img src="https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png" alt='story 2' className='img-fluid' />
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}

export default StorySection
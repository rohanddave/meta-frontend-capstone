import React from 'react'
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    id: '',
    rating: 1.0,
    person: {
      img: 'https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png',
      name: 'test',
    },
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin pulvinar mattis. Fusce hendrerit lorem accumsan nunc laoreet fermentum.',
  },
  {
    id: '',
    rating: 2.0,
    person: {
      img: 'https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png',
      name: 'test 2',
    },
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin pulvinar mattis. Fusce hendrerit lorem accumsan nunc laoreet fermentum.',
  },
  {
    id: '',
    rating: 3.0,
    person: {
      img: 'https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png',
      name: 'test 3',
    },
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin pulvinar mattis. Fusce hendrerit lorem accumsan nunc laoreet fermentum.',
  },
  {
    id: '',
    rating: 4.0,
    person: {
      img: 'https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png',
      name: 'test 4',
    },
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin pulvinar mattis. Fusce hendrerit lorem accumsan nunc laoreet fermentum.',
  },
]

function TestimonialSection() {
  return (
    <>
      <div className="row justify-content-center">
        <h2>Testimonials</h2>
      </div>
      <div className="row justify-content-center">
        {testimonials.map(testimonial => (
          <div className="col-md-3" key={testimonial.id}>
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </>
  )
}

export default TestimonialSection
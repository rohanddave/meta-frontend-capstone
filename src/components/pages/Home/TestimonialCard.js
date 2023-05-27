import React from 'react'

function TestimonialCard({ rating, person, review, }) {
    return (
        <div className="card">
            <div className="card-header">
                <div className="row align-items-center">
                    <div className="col-5">
                        <img src={person.img} alt="Profile" className="rounded-circle img-fluid" />
                    </div>
                    <div className="col-7 text-start">
                        <h5 className="mb-0">{person.name}</h5>
                        <p className="mb-0">Rating: {rating}</p>
                    </div>
                </div>
            </div>
            <div className="card-body" style={{ textAlign: 'left' }}>
                <p className="card-text">{review}</p>
            </div>
        </div>
    )
}

export default TestimonialCard
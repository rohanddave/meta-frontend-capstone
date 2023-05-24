import React from 'react'

function ItemCard({ title, description, img, price }) {
    return (
        <article className="card">
            <header className='card-header'>
                <img src={img} className="card-img-top" alt={title} />
            </header>
            <main className="card-body" style={{ textAlign: 'left' }}>
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{title}</h5>
                    <h5 className="card-price">${price}</h5>
                </div>
                <p className="card-text">{description}</p>
            </main>
            <footer className="card-footer text-md-start">
                <a href="/#" className="card-link">Order a delivery</a>
            </footer>
        </article>
    )
}

export default ItemCard
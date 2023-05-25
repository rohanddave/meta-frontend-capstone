import React from 'react'
import ItemCard from './ItemCard';

const items = [
    {
        title: 'Greek Salad',
        img: 'https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin pulvinar mattis. Fusce hendrerit lorem accumsan nunc laoreet fermentum.',
        price: 2.98,
    },
    {
        title: 'Bruchetta',
        img: 'https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin pulvinar mattis. Fusce hendrerit lorem accumsan nunc laoreet fermentum.',
        price: 5.00,
    },
    {
        title: 'Lemon Dessert',
        img: 'https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin pulvinar mattis. Fusce hendrerit lorem accumsan nunc laoreet fermentum.',
        price: 10.00,
    },
]

function SpecialSection() {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-6 text-md-start">
                    <h2>Specials</h2>
                </div>
                <div className="col-md-6 text-md-end">
                    <button type="button" className="btn btn-dark">Online Menu</button>
                </div>
            </div>
            <div className="row justify-content-center">
                {items.map(item => (
                    <div className="col-md-4" key={item.id}>
                        <ItemCard {...item} />
                    </div>
                ))}
            </div>
        </>

    )
}

export default SpecialSection
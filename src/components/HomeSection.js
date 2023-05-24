import React from 'react';

function HomeSection() {
    return (
        <section className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 text-md-start text-center" >
                    <h1>Little Lemon</h1>
                    <h5>Chicago</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin pulvinar mattis. Fusce hendrerit lorem accumsan nunc laoreet fermentum.
                    </p>
                    <button type="button" class="btn btn-dark">Reserve a Table</button>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid" src="https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png" alt="Placeholder" />
                </div>
            </div>
        </section>
    );
}

export default HomeSection;

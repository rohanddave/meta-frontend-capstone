import React from 'react'
import FooterList from './FooterList'
import SectionContainer from './SectionContainer'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <SectionContainer>
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <img src="https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png" alt="Logo" className='img-fluid' />
                    </div>
                    <div class="col-md-3">
                        <FooterList heading="Navigation">
                            <Link to='/'>Home</Link>
                            <a href="/#">About</a>
                            <a href="/#">Menu</a>
                            <a href="/#">Reservations</a>
                            <a href="/#">Order Online</a>
                            <a href="/#">Login</a>
                        </FooterList>
                    </div>

                    <div class="col-md-3">
                        <FooterList heading="Contact">
                            <a href="/#">Address</a>
                            <a href="/#">Phone Number</a>
                            <a href="/#">Email</a>
                        </FooterList>
                    </div>

                    <div class="col-md-3">
                        <FooterList heading="Social Media Links">
                            <a href="/#">Facebook</a>
                            <a href="/#">Instagram</a>
                            <a href="/#">Twitter</a>
                        </FooterList>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}

export default Footer
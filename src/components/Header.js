import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <section className="container w-75">
            <div className="section container-fluid">
                <nav className="navbar navbar-expand-lg static-top">
                    <div className="container">
                        <a className="navbar-brand" href="/#">
                            <img
                                src="https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png"
                                alt="..."
                                height="100"
                            />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav w-100 nav-fill">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/#">
                                        Menu
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link to='/booking' className="nav-link" href="/#">
                                        Booking
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/#">
                                        Order Online
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">
                                        Login
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Header
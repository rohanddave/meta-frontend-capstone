import React from 'react'
import { Link } from 'react-router-dom'
import pages from '../../utils/pages';

function Header() {
    return (
        <section className="container w-75">
            <div className="section container-fluid">
                <nav className="navbar navbar-expand-lg static-top">
                    <div className="container">
                        <Link className="navbar-brand" to={pages.home}>
                            <img
                                src="https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png"
                                alt="..."
                                height="100"
                            />
                        </Link>
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
                                    <Link className="nav-link" aria-current="page" to={pages.home}>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={pages.construction}>
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to={pages.construction}>
                                        Menu
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={pages.booking}>
                                        Booking
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to={pages.construction}>
                                        Order Online
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={pages.construction}>
                                        Login
                                    </Link>
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
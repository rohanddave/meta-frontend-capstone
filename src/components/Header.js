import React from 'react'

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
                            <ul className="navbar-nav w-100 nav-fill"> {/* Added 'w-100' and 'nav-fill' classes */}
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/#">
                                        Menu
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">
                                        Reservation
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/#">
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
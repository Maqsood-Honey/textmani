import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.AppName}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                        </ul>
                        <div onClick={() => props.pallet('primary')} className="bg-primary rounded mx-2" style={{ height: '30px', width: "30px", cursor: "pointer" }}>
                        </div>
                        <div onClick={() => props.pallet('danger')} className="bg-danger rounded mx-2" style={{ height: '30px', width: "30px", cursor: "pointer" }}>
                        </div>
                        <div onClick={() => props.pallet('success')} className="bg-success rounded mx-2" style={{ height: '30px', width: "30px", cursor: "pointer" }}>
                        </div>
                        <div onClick={() => props.pallet('warning')} className="bg-warning rounded mx-2" style={{ height: '30px', width: "30px", cursor: "pointer" }}>
                        </div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>




        </div>
    )
}

export default Navbar
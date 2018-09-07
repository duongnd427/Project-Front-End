import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Menu Food</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <Button color='danger'>Đăng kí</Button>
                            <Button color='success'>Đăng nhập</Button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

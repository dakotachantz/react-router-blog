import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
export default class BaseLayout extends Component {
    render() {
        return (
            <main>
                <nav style={{ width: '100%', zIndex: '100' }} className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container nav-container">
                        <NavLink className="navbar-brand" to="/">SRB</NavLink>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                        <i className="fa fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/" activeStyle={{ textDecoration: 'underline' }}>All Posts</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/newpost" activeStyle={{ textDecoration: 'underline' }}>New Post</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <ul className="list-inline text-center">
                                    <li className="list-inline-item">
                                        <Link to="#">
                                            <span className="fa-stack fa-lg">
                                                <i className="fa fa-circle fa-stack-2x"></i>
                                                <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#">
                                            <span className="fa-stack fa-lg">
                                                <i className="fa fa-circle fa-stack-2x"></i>
                                                <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#">
                                            <span className="fa-stack fa-lg">
                                                <i className="fa fa-circle fa-stack-2x"></i>
                                                <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                                <p className="copyright text-muted">Copyright &copy; Your Blog 2017</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        )
    }
}

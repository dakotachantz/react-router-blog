import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
export default class BaseLayout extends Component {
    render() {
        return (
            <main>
                <nav style={{ width: '100%', zIndex: '100' }} className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container nav-container">
                        <NavLink className="navbar-brand" to="/">SRB</NavLink>
                        <div>
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
                                        <a href="https://www.linkedin.com/in/dakotachantz/">
                                            <span className="fa-stack fa-lg">
                                                <i className="fa fa-circle fa-stack-2x"></i>
                                                <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://github.com/dakotachantz">
                                            <span className="fa-stack fa-lg">
                                                <i className="fa fa-circle fa-stack-2x"></i>
                                                <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.instagram.com/dakotachantz/">
                                            <span className="fa-stack fa-lg">
                                                <i className="fa fa-circle fa-stack-2x"></i>
                                                <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                                <p className="copyright text-muted">Copyright &copy; Dakota Nichols 2017</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        )
    }
}

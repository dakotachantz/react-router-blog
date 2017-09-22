import React, { Component } from 'react'
export default class Header extends Component {
    render() {
        return (
            <header className="masthead parallax" style={{ backgroundImage: `url(${this.props.backgroundImg})` }} >
                <div className="container" style={{
                    width: '100%',
                    backgroundColor: 'rgba(0,0,0,0.2)'
                }}>
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>{this.props.heading}</h1>
                                <span className="subheading">{this.props.subheading}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
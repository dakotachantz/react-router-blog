import React, { Component } from 'react'
import Header from './Header';
import newpostHeader from '../img/newpost-header.jpg';
const styles = {
    formStyles: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '1em'
    }
}

export default class CreatePost extends Component {
    render() {
        return (
            <div className="container" style={{ width: '100%', padding: 0 }}>
                <Header heading={"Create a Post"} subheading={"This is where a subheading lives"} backgroundImg={newpostHeader} />
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto" style={styles.formStyles}>
                        <h2>Add New Post</h2>
                        <form name="sentMessage" id="contactForm">
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Name</label>
                                    <input type="text" className="form-control" placeholder="Name" id="name" required autoComplete="off" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Title</label>
                                    <input type="text" className="form-control" placeholder="Title" id="title" required autoComplete="off" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Body</label>
                                    <textarea rows="5" className="form-control" placeholder="Message" id="message" required autoComplete="off"></textarea>
                                </div>
                            </div>
                            <br />
                            <div className="form-group">
                                <button type="submit" className="btn btn-secondary" id="sendMessageButton">Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

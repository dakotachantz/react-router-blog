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
    constructor(props) {
        super(props)
        this.state = {
            authorName: "",
            blogTitle: "",
            blogEntry: ""
        }
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addPost = (e) => {
        e.preventDefault();
        this.setState({ authorName: e.target.value, blogTitle: e.target.value, blogEntry: e.target.value });
        let listItem = JSON.stringify(this.state);

        fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
            method: "POST",
            body: listItem,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        ).then(response => {
            console.log(response, "yay");
            this.props.history.push('/');
        }).catch(err => {
            console.log(err, "boo!");
        });
        this.setState({ authorName: '', blogTitle: '', blogEntry: '' });
    }

    render() {
        let { authorName, blogTitle, blogEntry } = this.state;

        return (
            <div className="container" style={{ width: '100%', padding: 0 }}>
                <Header heading={"Create a Post"} subheading={"Add your thoughts below"} backgroundImg={newpostHeader} />
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto" style={styles.formStyles}>
                        <h2>Add New Post</h2>
                        <form onSubmit={this.addPost}>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Name</label>
                                    <input onChange={this.handleInputChange} value={authorName} type="text" className="form-control" placeholder="Name" name="authorName" required autoComplete="off" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Title</label>
                                    <input onChange={this.handleInputChange} value={blogTitle} type="text" className="form-control" placeholder="Title" name="blogTitle" required autoComplete="off" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Body</label>
                                    <textarea onChange={this.handleInputChange} value={blogEntry} rows="5" className="form-control" placeholder="Type your blog entry here..." name="blogEntry" required autoComplete="off"></textarea>
                                </div>
                            </div>
                            <br />
                            <div className="form-group">
                                <button type="submit" className="btn btn-secondary">Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

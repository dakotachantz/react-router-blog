import React, { Component } from 'react'
import Header from './Header';
import postHeader from '../img/post-header.jpg';

export default class ShowPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {}
        }
    }

    componentWillMount() {
        const { id } = this.props.match.params;
        const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;
        fetch(URL).then(results => {
            return results.json();
        }).then(data => {
            this.setState({ post: data });
        })
    }
    render() {
        let { blogTitle, blogEntry, authorName } = this.state.post;
        return (
            <div className="container" style={{ width: '100%', padding: 0 }}>
                <Header heading={blogTitle} subheading={"by " + authorName} backgroundImg={postHeader} style={{ backgroundPosition: 'center' }}
                />
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <p>{blogEntry}</p>
                    </div>
                </div>
            </div>
        )
    }
}

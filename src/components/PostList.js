import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';
import homeHeader from '../img/home-header.jpg';
export default class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }

    }
    componentWillMount = () => {
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(results => {
            return results.json();
        }).then(data => {
            this.setState({ posts: data });
        })
    }
    render() {
        let posts;
        posts = this.state.posts.map((post, index) => {
            return (
                <div className="post-preview" key={post._id}>
                    <Link to={'/showpost/' + post._id}>
                        <h2 className="post-title">
                            {post.blogTitle}
                        </h2>
                        <p className="post-meta">Posted by <span style={{ color: 'black' }}>{post.authorName}</span></p>
                    </Link>
                    <hr />
                </div>
            )
        })

        return (
            <div className="container" style={{ width: '100%', padding: 0 }}>
                <Header heading={"Simple React Blog"} subheading={"Welcome to my thoughts."} backgroundImg={homeHeader}
                />
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {posts}
                    </div>
                </div>
            </div>
        )
    }
}

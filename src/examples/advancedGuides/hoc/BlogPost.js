import React from "react";

export class BlogPost extends React.Component {
    render() {
        const post = this.props.data;
        return (
            <div>
                <h1>{post.title}</h1>
                <span>{post.description}</span>
                <p>{post.article}</p>
            </div>
        );
    }
}
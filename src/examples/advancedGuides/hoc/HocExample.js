import React from "react";
import {DataSource} from "./DataSource";
import {EventEmitter} from "./EventEmitter";
import {BlogPost} from "./BlogPost";
import {CommentList} from "./CommentList";
import {hocExample} from "./Hoc";

const CommentListWithSubscription = hocExample(CommentList, (DataSource) => DataSource.getComments());
const BlogPostWithSubscription = hocExample(BlogPost, (DataSource, props) => DataSource.getPost(props.postId));


export default class HocExample extends React.Component {
    changeDataSource = () => {
        DataSource.posts[1].title = 'POST 1';
        DataSource.comments[0].comment = 'censored (Edited)';
        DataSource.comments[0].dateTime = (new Date()).toLocaleTimeString();
        EventEmitter.dispatch('change');
    }

    render() {
        return (
            <>
                <BlogPostWithSubscription postId="1" dataPropName="post"/>
                <CommentListWithSubscription dataPropName="comments"/>
                <button onClick={this.changeDataSource}>Refresh DataSource</button>
            </>
        );
    }
}
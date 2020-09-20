import React from "react";

export class CommentList extends React.Component {
    render() {
        const comments = this.props.data;
        return (
            <>
                <div>Comments</div>
                {comments.map((comment) => (
                    <div style={{marginLeft: "20px"}} key={comment.comment + comment.dateTime}>
                        <div>{comment.author} {comment.dateTime}</div>
                        <div style={{marginLeft: "10px"}}>{comment.comment}</div>
                    </div>
                ))}
            </>
        );
    }
}
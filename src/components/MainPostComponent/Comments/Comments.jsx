import React from "react";
import styles from "../Comments/Comment.module.css";

const Comments = (props) => {
  const comments =
    props.comments &&
    props.comments.map((comment) => {
      return (
        <div
          className={styles.commentsBlock}
          key={comment.commentText + comment.commentDate}
        >
          <div className={styles.comment}>
            <span>{comment.commentText}</span>
          </div>
          <div className={styles.commentDate}>
            <span>{comment.commentDate}</span>
          </div>
        </div>
      );
    });

  return (
    <>
      <div className={styles.leaveCommentForm}>
        <textarea
          value={props.commentTextareaField}
          onChange={props.handleAddCommentForm}
          placeholder="Leave your comment here ..."
        ></textarea>
        <button className={styles.sendButton} onClick={props.addCommentAC}>
          Comment it
        </button>
      </div>

      {comments}
    </>
  );
};

export default Comments;

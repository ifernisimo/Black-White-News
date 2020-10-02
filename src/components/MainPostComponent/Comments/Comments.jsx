import React from "react";
import styles from "../Comments/Comment.module.css";

const Comments = (props) => {
  return (
    <>
      <div className={styles.leaveCommentForm}>
        <textarea
          value={props.commentTextareaField}
          onChange={props.handleAddCommentForm}
          placeholder="Leave your comment here ..."
        ></textarea>
        <button>Comment it</button>
      </div>

      <div className={styles.commentsBlock}>
        <div className={styles.comment}>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa
            eaque ipsum iusto odio officia porro provident quibusdam quidem
            reiciendis rerum veniam, vitae voluptatem. Quae.
          </span>
        </div>
        <div className={styles.commentDate}>
          <span>25.08.2020 16:35</span>
        </div>
      </div>
    </>
  );
};

export default Comments;

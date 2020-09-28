import React from "react";
import styles from "../Comments/Comment.module.css";

const Comments = (props) => {
  return (
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
  );
};

export default Comments;

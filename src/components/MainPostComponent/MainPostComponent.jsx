import React from "react";
import styles from "./MainPostComponent.module.css";
import Comments from "./Comments/Comments";
import ActionButtons from "./ActionButtons/ActionButtons";

const MainPostComponent = (props) => {
  return (
    <>
      <div className={styles.publisher}>
        <span>{props.activePost ? props.activePost.author : "Loading..."}</span>
      </div>
      <div className={styles.postTitle}>
        <span>{props.activePost ? props.activePost.title : "Loading..."}</span>
      </div>
      <div className={styles.postThumb}>
        {props.activePost ? (
          <img src={props.activePost.urlToImage} alt="" />
        ) : (
          "Loading..."
        )}

        <div className={styles.shortDescription}>
          {props.activePost ? props.activePost.description : "Loading..."}
        </div>
      </div>
      {props.activePost ? (
        <ActionButtons
          publishedAt={props.activePost.publishedAt}
          handleNextNews={props.handleNextNews}
          moveToBlackList={props.moveToBlackList}
        />
      ) : null}

      <div className={styles.fullPostText}>
        <article>
          {props.activePost ? props.activePost.content : "Loading..."}
        </article>
      </div>
      <hr />
      <Comments />
    </>
  );
};

export default MainPostComponent;

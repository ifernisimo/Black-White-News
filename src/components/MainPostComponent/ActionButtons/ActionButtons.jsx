import React from "react";
import styles from "../ActionButtons/ActionButtons.module.css";
import likeIcon from "../../../Assets/images/like-icon.svg";
import dislikeIcon from "../../../Assets/images/dislike-icon.svg";
import arrowIcon from "../../../Assets/images/right-arrow.svg";

const ActionButtons = (props) => {
  return (
    <div className={styles.actionBlock}>
      <div className={styles.publicationDate}>{Date(props.publishedAt)}</div>
      <div className={styles.likeBtn}>
        <button onClick={props.moveToWhiteList}>
          <img src={likeIcon} alt="Like icon" />
          <span>GOOD NEWS</span>
        </button>
      </div>
      <div className={styles.dislikeBtn}>
        <button onClick={props.moveToBlackList}>
          <img src={dislikeIcon} alt="Dislike icon" />
          <span>BAD NEWS</span>
        </button>
      </div>
      <div className={styles.nextPostBtn}>
        <button onClick={props.handleNextNews}>
          <img src={arrowIcon} alt="Arrow icon" />
          <span>Next</span>
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;

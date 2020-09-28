import React from "react";
import styles from "../ActionButtons/ActionButtons.module.css";
import likeIcon from "../../../Assets/images/like-icon.svg";
import dislikeIcon from "../../../Assets/images/dislike-icon.svg";
import arrowIcon from "../../../Assets/images/right-arrow.svg";

const ActionButtons = (props) => {
  return (
    <div className={styles.actionBlock}>
      <div className={styles.publicationDate}>25 июня 2020 21:17</div>
      <div className={styles.likeBtn}>
        <button>
          <img src={likeIcon} alt="Like icon" />
          <span>1074</span>
        </button>
      </div>
      <div className={styles.dislikeBtn}>
        <button>
          <img src={dislikeIcon} alt="Dislike icon" />
          <span>587</span>
        </button>
      </div>
      <div className={styles.nextPostBtn}>
        <button>
          <img src={arrowIcon} alt="Arrow icon" />
          <span>Next</span>
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;

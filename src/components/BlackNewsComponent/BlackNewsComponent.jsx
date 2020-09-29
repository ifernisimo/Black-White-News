import React from "react";
import styles from "./BlackNewsComponent.module.css";

const BlackNewsComponent = (props) => {
  const blackNewsList = props.newsArray.map((news, idx) => (
    <div className={styles.newsItem} key={news.title + idx}>
      <img src={news.urlToImage} alt={news.title} />
      <span>{news.title}</span>
    </div>
  ));
  return (
    <>
      <div className={styles.blackNews}>{blackNewsList}</div>
    </>
  );
};

export default BlackNewsComponent;

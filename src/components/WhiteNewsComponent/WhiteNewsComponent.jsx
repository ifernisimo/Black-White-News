import React from "react";
import styles from "./WhiteNewsComponent.module.css";

const WhiteNewsComponent = (props) => {
  debugger;
  const whiteNewsList = props.whiteNews.map((news, idx) => (
    <div className={styles.newsItem} key={news.title + idx}>
      <img src={news.urlToImage} alt={news.title} />
      <span>{news.title}</span>
    </div>
  ));

  return (
    <>
      <div className={styles.whiteNews}>{whiteNewsList}</div>
    </>
  );
};

export default WhiteNewsComponent;

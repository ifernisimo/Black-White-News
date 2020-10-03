import React from "react";
import styles from "./BlackNewsComponent.module.css";

const BlackNewsComponent = (props) => {
  const blackNewsList = props.blackNews.map((news, idx) => (
    <div
      onClick={props.handleSelectBlackNews}
      className={styles.newsItem}
      key={news.title + idx}
      id={idx}
    >
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

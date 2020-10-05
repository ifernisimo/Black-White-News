import React from "react";
import styles from "./WhiteNewsComponent.module.css";
import WhiteNewsComponent from "./WhiteNewsComponent";
import { selectWhiteNews } from "../../BLL/reducers/news-reducer";
import { connect } from "react-redux";

const WhiteNewsComponentContainer = (props) => {
  const handleSelectWhiteNews = (e) => {
    props.selectWhiteNews(e.currentTarget.id);
  };

  return (
    <WhiteNewsComponent
      handleSelectWhiteNews={handleSelectWhiteNews}
      {...props}
    />
  );
};

const mapStateToProps = (state) => {};

export default WhiteNewsComponentContainer;

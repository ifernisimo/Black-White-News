import React from "react";
import MainPageComponent from "./MainPageComponent";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  getSearchNewsFromApi,
  getTopHeadlinesFromApi,
  selectBlackNews,
  selectLanguage,
} from "../../BLL/reducers/news-reducer";

const MainPageComponentContainer = (props) => {
  const handleChangeLanguage = (e) => {
    props.selectLanguage(e.target.value);
  };

  return (
    <MainPageComponent handleChangeLanguage={handleChangeLanguage} {...props} />
  );
};

const mapStateToProps = (state) => ({
  allNews: state.news.preloadedNews,
  whiteNews: state.news.generatedWhiteList,
  blackNews: state.news.generatedBlackList,
});

export default compose(
  connect(mapStateToProps, {
    getSearchNewsFromApi,
    getTopHeadlinesFromApi,
    selectBlackNews,
    selectLanguage,
  })
)(MainPageComponentContainer);

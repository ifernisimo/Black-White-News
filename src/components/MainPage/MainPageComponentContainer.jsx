import React from "react";
import MainPageComponent from "./MainPageComponent";
import { compose } from "redux";
import { connect } from "react-redux";
import { getSearchNewsFromApi } from "../../BLL/reducers/news-reducer";

const MainPageComponentContainer = (props) => {
  return <MainPageComponent {...props} />;
};

const mapStateToProps = (state) => ({
  allNews: state.news.preloadedNews,
  whiteNews: state.news.generatedWhiteList,
  blackNews: state.news.generatedBlackList,
});

export default compose(connect(mapStateToProps, { getSearchNewsFromApi }))(
  MainPageComponentContainer
);

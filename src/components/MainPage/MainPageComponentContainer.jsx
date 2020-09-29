import React from "react";
import MainPageComponent from "./MainPageComponent";
import { compose } from "redux";
import { connect } from "react-redux";
import { getSearchNewsFromApi } from "../../BLL/reducers/news-reducer";

const MainPageComponentContainer = (props) => {
  return <MainPageComponent {...props} />;
};

const mapStateToProps = (state) => ({
  newsArray: state.news.preloadedNews,
});

export default compose(connect(mapStateToProps, { getSearchNewsFromApi }))(
  MainPageComponentContainer
);

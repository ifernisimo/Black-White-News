import React, { useState, useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import MainPostComponent from "./MainPostComponent";
import {
  getTopHeadlinesFromApi,
  setActivePost,
} from "./../../BLL/reducers/news-reducer";

const MainPostComponentContainer = (props) => {
  useEffect(() => {
    let isMounted = true;
    isMounted && props.getTopHeadlinesFromApi();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleNextNews = () => {
    props.setActivePost(props.activePostPosition);
  };

  return <MainPostComponent handleNextNews={handleNextNews} {...props} />;
};

const mapStateToProps = (state) => ({
  activePost: state.news.activePost,
  activePostPosition: state.news.activePostPosition,
});

export default compose(
  connect(mapStateToProps, { getTopHeadlinesFromApi, setActivePost })(
    MainPostComponentContainer
  )
);

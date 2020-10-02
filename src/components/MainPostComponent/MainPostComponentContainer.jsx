import React, { useState, useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import MainPostComponent from "./MainPostComponent";
import {
  getTopHeadlinesFromApi,
  setActivePost,
  setMainNewsPage,
  setIsMounted,
  moveToBlackList,
} from "./../../BLL/reducers/news-reducer";

const MainPostComponentContainer = (props) => {
  useEffect(() => {
    debugger;
    let isMounted = true;
    isMounted && props.getTopHeadlinesFromApi("ua", props.mainNewsPagePosition);

    return () => {
      props.setIsMounted();
      isMounted = props.mainPostIsMounted;
    };
  }, [props.mainPostIsMounted]);

  const handleNextNews = () => {
    props.activePostPosition === 19 &&
      props.setMainNewsPage(props.mainNewsPagePosition + 1);
    props.setActivePost(props.activePostPosition);
  };

  return <MainPostComponent handleNextNews={handleNextNews} {...props} />;
};

const mapStateToProps = (state) => ({
  activePost: state.news.activePost,
  activePostPosition: state.news.activePostPosition,
  mainNewsPagePosition: state.news.mainNewsPagePosition,
  mainPostIsMounted: state.news.mainPostIsMounted,
});

export default compose(
  connect(mapStateToProps, {
    getTopHeadlinesFromApi,
    setActivePost,
    setMainNewsPage,
    setIsMounted,
    moveToBlackList,
  })(MainPostComponentContainer)
);

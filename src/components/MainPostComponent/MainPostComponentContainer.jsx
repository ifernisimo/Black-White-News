import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import MainPostComponent from "./MainPostComponent";
import {
  getTopHeadlinesFromApi,
  setActivePost,
  setMainNewsPage,
  setIsMounted,
  moveToBlackList,
  moveToWhiteList,
  addCommentAC,
  updateCommentField,
} from "./../../BLL/reducers/news-reducer";

const MainPostComponentContainer = (props) => {
  useEffect(() => {
    let isMounted = true;
    isMounted &&
      props.getTopHeadlinesFromApi(props.language, props.mainNewsPagePosition);

    return () => {
      props.setIsMounted();
      isMounted = props.mainPostIsMounted;
    };
  }, [props.mainPostIsMounted, props.language, props]);

  const handleNextNews = () => {
    props.activePostPosition === 19 &&
      props.setMainNewsPage(props.mainNewsPagePosition + 1);
    props.setActivePost(props.activePostPosition);
  };

  const handleAddCommentForm = (e) => {
    props.updateCommentField(e.target.value);
  };

  return (
    <MainPostComponent
      handleAddCommentForm={handleAddCommentForm}
      handleNextNews={handleNextNews}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({
  activePost: state.news.activePost,
  activePostPosition: state.news.activePostPosition,
  mainNewsPagePosition: state.news.mainNewsPagePosition,
  mainPostIsMounted: state.news.mainPostIsMounted,
  commentTextareaField: state.news.commentTextareaField,
  language: state.news.language,
});

export default compose(
  connect(mapStateToProps, {
    getTopHeadlinesFromApi,
    setActivePost,
    setMainNewsPage,
    setIsMounted,
    moveToBlackList,
    moveToWhiteList,
    addCommentAC,
    updateCommentField,
  })(MainPostComponentContainer)
);

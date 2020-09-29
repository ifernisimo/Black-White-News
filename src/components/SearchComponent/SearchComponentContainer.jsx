import React from "react";
import SearchComponent from "./SearchComponent";
import { connect } from "react-redux";
import { compose } from "redux";
import { getSearchNewsFromApi } from "../../BLL/reducers/news-reducer";

const SearchComponentContainer = (props) => {
  return <SearchComponent {...props} />;
};

const mapStateToProps = (state) => ({});

export default compose(connect(mapStateToProps, { getSearchNewsFromApi }))(
  SearchComponentContainer
);

import React from "react";
import SearchComponent from "./SearchComponent";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  getSearchNewsFromApi,
  setDateFrom,
  setDateTo,
} from "../../BLL/reducers/news-reducer";

const SearchComponentContainer = (props) => {
  props.getSearchNewsFromApi();
  return <SearchComponent {...props} />;
};

const mapStateToProps = (state) => ({
  searchFromDate: state.news.searchFromDate,
  searchToDate: state.news.searchToDate,
});

export default compose(
  connect(mapStateToProps, { getSearchNewsFromApi, setDateFrom, setDateTo })
)(SearchComponentContainer);

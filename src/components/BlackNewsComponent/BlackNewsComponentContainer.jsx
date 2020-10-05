import React from "react";
import BlackNewsComponent from "./BlackNewsComponent";
import { connect } from "react-redux";
import { selectBlackNews } from "../../BLL/reducers/news-reducer";

const BlackNewsComponentContainer = (props) => {
  const handleSelectBlackNews = (e) => {
    console.log(e.currentTarget.id);
    props.selectBlackNews(e.currentTarget.id);
  };

  return (
    <BlackNewsComponent
      handleSelectBlackNews={handleSelectBlackNews}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { selectBlackNews })(
  BlackNewsComponentContainer
);

import React from "react";
import WhiteNewsComponent from "./WhiteNewsComponent";

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

export default WhiteNewsComponentContainer;

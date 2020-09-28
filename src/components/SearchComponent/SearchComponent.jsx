import React from "react";
import styles from "./SearchComponent.module.css";

const SearchComponent = (props) => {
  return (
    <>
      <div className="search">
        <input type="text" placeholder="Поиск..." />
      </div>
    </>
  );
};

export default SearchComponent;

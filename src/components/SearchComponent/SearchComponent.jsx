import React from "react";
import styles from "./SearchComponent.module.css";

const SearchComponent = (props) => {
  return (
    <>
      <div className={styles.search}>
        <input
          onBlur={(e) => {
            props.getSearchNewsFromApi(e.target.value);
          }}
          type="text"
          placeholder="Поиск..."
        />
      </div>
    </>
  );
};

export default SearchComponent;

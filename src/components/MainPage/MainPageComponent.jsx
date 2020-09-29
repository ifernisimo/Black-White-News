import React from "react";
import styles from "./MainPageComponent.module.css";
import MainPostComponent from "../MainPostComponent/MainPostComponent";
import SearchComponentContainer from "../SearchComponent/SearchComponentContainer";
import WhiteNewsComponent from "../WhiteNewsComponent/WhiteNewsComponent";
import BlackNewsComponent from "../BlackNewsComponent/BlackNewsComponent";

const MainPageComponent = (props) => {
  return (
    <>
      <div className={styles.logo}>
        <h1>BLACK/WHITE</h1>
        <span>news</span>
      </div>

      <main className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <MainPostComponent />
        </div>

        <div className={styles.rightColumn}>
          <SearchComponentContainer />
          <div className={styles.blackWhiteLists}>
            <WhiteNewsComponent newsArray={props.newsArray} />
            <BlackNewsComponent newsArray={props.newsArray} />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPageComponent;

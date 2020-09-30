import React from "react";
import styles from "./MainPageComponent.module.css";
import SearchComponentContainer from "../SearchComponent/SearchComponentContainer";
import WhiteNewsComponent from "../WhiteNewsComponent/WhiteNewsComponent";
import BlackNewsComponent from "../BlackNewsComponent/BlackNewsComponent";
import MainPostComponentContainer from "../MainPostComponent/MainPostComponentContainer";

const MainPageComponent = (props) => {
  return (
    <>
      <div className={styles.logo}>
        <h1>BLACK/WHITE</h1>
        <span>news</span>
      </div>

      <main className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <MainPostComponentContainer {...props} />
        </div>

        <div className={styles.rightColumn}>
          <SearchComponentContainer />
          <div className={styles.blackWhiteLists}>
            <WhiteNewsComponent whiteNews={props.whiteNews} />
            <BlackNewsComponent blackNews={props.blackNews} />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPageComponent;

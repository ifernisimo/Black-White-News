import React from "react";
import styles from "./MainPageComponent.module.css";
import SearchComponentContainer from "../SearchComponent/SearchComponentContainer";
import WhiteNewsComponentContainer from "../WhiteNewsComponent/WhiteNewsComponentContainer";
import BlackNewsComponentContainer from "../BlackNewsComponent/BlackNewsComponentContainer";
import MainPostComponentContainer from "../MainPostComponent/MainPostComponentContainer";
import CountrySelectorComponent from "./CountrySelector/CountrySelectorComponent";

const MainPageComponent = (props) => {
  return (
    <>
      <div className={styles.logo}>
        <h1>BLACK/WHITE</h1>
        <span>news</span>
      </div>
      <CountrySelectorComponent
        handleChangeLanguage={props.handleChangeLanguage}
      />

      <main className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <MainPostComponentContainer {...props} />
        </div>

        <div className={styles.rightColumn}>
          <SearchComponentContainer />
          <div className={styles.blackWhiteLists}>
            <WhiteNewsComponentContainer whiteNews={props.whiteNews} />
            <BlackNewsComponentContainer blackNews={props.blackNews} />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPageComponent;

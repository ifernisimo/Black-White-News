import React from "react";
import styles from "./MainPageComponent.module.css";
import SearchComponentContainer from "../SearchComponent/SearchComponentContainer";
import WhiteNewsComponentContainer from "../WhiteNewsComponent/WhiteNewsComponentContainer";
import BlackNewsComponentContainer from "../BlackNewsComponent/BlackNewsComponentContainer";
import MainPostComponentContainer from "../MainPostComponent/MainPostComponentContainer";

const MainPageComponent = (props) => {
  return (
    <>
      <div className={styles.logo}>
        <h1>BLACK/WHITE</h1>
        <span>news</span>
      </div>
      <div className={styles.language}>
        <select
          onChange={props.handleChangeLanguage}
          defaultValue="ua"
          name="country"
          id="country"
        >
          <option value="ua">Ukraine</option>
          <option value="us">USA</option>
          <option value="ru">Russia</option>
          <option value="de">Deutch</option>
        </select>
      </div>

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

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

      <nav className={styles.categoryNavigation}>
        <li className="navItem">business</li>
        <li className="navItem">technology</li>
        <li className="navItem">entertainment</li>
        <li className="navItem">general</li>
        <li className="navItem">health</li>
        <li className="navItem">science</li>
        <li className="navItem">sports</li>
      </nav>

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

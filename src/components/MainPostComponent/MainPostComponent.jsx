import React from "react";
import styles from "./MainPostComponent.module.css";
import Comments from "./Comments/Comments";
import ActionButtons from "./ActionButtons/ActionButtons";

const MainPostComponent = (props) => {
  return (
    <>
      <div className={styles.publisher}>
        <span>New York Times</span>
      </div>
      <div className={styles.postTitle}>
        <span>Новость дня и её название.</span>
      </div>
      <div className={styles.postThumb}>
        <img
          src="https://static.1tv.ru/uploads/video/material/splash/2020/08/26/615421/_original/615421_40bd5570d8.jpg"
          alt=""
        />
        <div className={styles.shortDescription}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          cupiditate deserunt itaque odio sit! A alias aspernatur cum
          dignissimos quas repellat sit soluta tempora voluptas!
        </div>
      </div>
      <ActionButtons />
      <div className={styles.fullPostText}>
        <article>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          accusantium animi ea eaque eum hic illum nam nulla, possimus quas
          quidem ratione rem saepe? A fugiat mollitia neque numquam quod.
          Accusamus alias aut corporis cum deleniti, dicta ea et eum impedit
          ipsam maxime minima nam necessitatibus nobis nostrum numquam optio,
          pariatur perspiciatis provident quaerat quasi rem repellendus sunt?
          Asperiores corporis deleniti voluptates? Dolor doloribus fugit harum
          iste molestiae pariatur tempore? Accusantium adipisci, alias aperiam
          blanditiis cupiditate debitis deserunt dignissimos dolores doloribus
          eaque explicabo laboriosam nam, natus nemo nihil nulla praesentium
          quaerat, qui reiciendis tempora unde vel veritatis voluptate. Ab
          accusantium aspernatur corporis cum debitis deleniti ea earum enim
          error, ex id illum impedit iusto laborum magnam maxime molestias
          mollitia natus neque nihil nisi nobis odit omnis perspiciatis
          praesentium quis ratione recusandae repellendus saepe sequi sint sit
          temporibus veniam veritatis vero, voluptate, voluptatem! Architecto
          cum debitis, excepturi explicabo fugit libero minima recusandae
          reiciendis, saepe sed, tempora totam. Ad consectetur consequatur
          deleniti, doloremque facilis incidunt laborum maiores minima molestias
          neque, qui repudiandae sit voluptatum. A amet architecto autem
          blanditiis, consequuntur ea eligendi expedita fuga hic ipsa ipsum
          libero magnam magni molestias nisi omnis porro ullam? Accusamus et
          nesciunt nostrum omnis repudiandae sit!
        </article>
      </div>
      <hr />
      <Comments />
    </>
  );
};

export default MainPostComponent;

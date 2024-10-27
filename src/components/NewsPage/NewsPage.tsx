import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { useGetLatesNewsQuery } from "../../store/services/newsApi";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const params = useParams();
  const { data, isLoading } = useGetLatesNewsQuery(null);

  return (
    <section>
      {data?.news.map((el, i) => {
        if (i == params.id) {
          return (
            <div key={el.id}>
              <div className={styles.row}>
                <h1 className={styles.title}>{el.title}</h1>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.row}>
                <img
                  className={styles.newspage__img}
                  src={el.image}
                  alt="Image"
                />
                <div>
                  <p className={styles.description}>{el.description}</p>
                  <p className={styles.author}>Author: {el.author}</p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </section>
  );
}
